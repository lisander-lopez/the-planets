
import { DistanceComponent } from '../../src/distanceComponent';
const unitOptions = ['Km', 'Mi'];

export const distance = {
    name: "distance",
    title: "Distance",
    type: "object",
    initialValue: {
        distanceValue: 0,
        distanceUnit: unitOptions[0],
        distanceFormatted: "0 Km"
    },
    fields: [
      {
        title: "",
        name: "distanceValue",
        type: "number"
      },
      {
          title: "",
          name: "distanceUnit",
          type: "string",
          options: {
            list: unitOptions
          }
      }, 
      {
        title: "",
        name: "distanceFormatted",
        type: "text",
        hidden: true
      }
    ],
    inputComponent: DistanceComponent
  };