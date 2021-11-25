import React from 'react'
import { withDocument } from 'part:@sanity/form-builder';
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event';

// Import UI components from Sanity UI
import { FormField } from '@sanity/base/components'
import { TextInput, Select, Flex } from '@sanity/ui'

import { useId } from "@reach/auto-id" // hook to generate unique IDs

export const TemperatureComponent = React.forwardRef((props, ref) => {
    const { 
        type,         // Schema information
        value,        // Current field value
        markers,      // Markers including validation rules
        presence,     // Presence information for collaborative avatars
        compareValue, // Value to check for "edited" functionality
        onFocus,      // Method to handle focus state
        onBlur,       // Method to handle blur state  
        onChange      // Method to handle patch events
      } = props;

    const temperatureOptions = type.fields[1].type.options.list;

    const handleValueChange = React.useCallback((event) => {
        const inputValue = parseFloat(event.target.value);
        
        const currUnitValue = value?.temperatureUnit;
        const formattedValue = `${inputValue}${currUnitValue}`;
        const formattedObject = {
            _type: "temperature",
            temperatureValue: inputValue || event.target.value,
            temperatureUnit: currUnitValue,
            temperatureFormatted: formattedValue
        }
        onChange(PatchEvent.from(set(formattedObject)))
    }, [onChange, value]);

    const handleUnitChange = React.useCallback((event) => {
        const inputUnitValue = event.target.value;
        const currTempVal = value?.temperatureValue;
        const formattedValue = `${currTempVal}${inputUnitValue}`;
        const formattedObject = {
            _type: "temperature",
            temperatureValue: currTempVal,
            temperatureUnit: inputUnitValue,
            temperatureFormatted: formattedValue
        }
        onChange(PatchEvent.from(set(formattedObject)))
    }, [onChange, value]);

    // Creates a unique ID for our input
    const formId = useId();
    const textInputId = useId();
    const selectId = useId();

    return (
    <>
        <FormField
            description={type.description}  // Creates description from schema
            title={type.title}              // Creates label from schema title
            __unstable_markers={markers}    // Handles all markers including validation
            __unstable_presence={presence}  // Handles presence avatars
            compareValue={compareValue}     // Handles "edited" status
            inputId={formId}               // Allows the label to connect to the input field
        >
            <Flex> 
                <TextInput
                id={textInputId}                  // A unique ID for this input

                value={value?.temperatureValue}// Current field value
                onFocus={onFocus}             // Handles focus events
                onBlur={onBlur}               // Handles blur events
                ref={ref}
                onChange={handleValueChange}
                />
                <Select
                    id={selectId}
                    value={value?.temperatureUnit}
                    onChange={handleUnitChange}
                >
                    {temperatureOptions.map( (unit,i) => {
                        return <option key={i}> {unit} </option>
                    })}
                </Select>
            </Flex>
        </FormField>
    </>
    )
});

TemperatureComponent.displayName = "Temperature Display Name"; // Idk what this is for lol
// Create the default export to import into our schema
export default withDocument(TemperatureComponent);