import TemperatureComponent from "../../src/temperatureComponent";

const unitOptions = ['°C', '°F'];

export const temperature = {
    name: "temperature",
    title: "Temperature",
    type: "object",
    initialValue: {
        temperatureValue: 0,
        temperatureUnit: unitOptions[0],
        temperatureFormatted: "0°C"
    },
    fields: [
      {
        title: "",
        name: "temperatureValue",
        type: "number"
      },
      {
          title: "",
          name: "temperatureUnit",
          type: "string",
          options: {
            list: unitOptions
          }
      }, 
      {
        title: "",
        name: "temperatureFormatted",
        type: "text",
        hidden: true
      }
    ],
    inputComponent: TemperatureComponent
  };