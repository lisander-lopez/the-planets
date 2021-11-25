import { TimeUnitComponent } from "../../src/timeUnitComponent";

const unitOptions = ['Hours', 'Days', 'Years'];

export const timeUnit = {
    name: "timeUnit",
    title: "TimeUnit",
    type: "object",
    initialValue: {
        timeValue: 0,
        timeUnitSelect: unitOptions[0],
        timeFormatted: "0 Hours"
    },
    fields: [
      {
        title: "",
        name: "timeValue",
        type: "number"
      },
      {
          title: "",
          name: "timeUnitSelect",
          type: "string",
          options: {
            list: unitOptions
          }
      }, 
      {
        title: "",
        name: "timeFormatted",
        type: "text",
        hidden: true
      }
    ],
    inputComponent: TimeUnitComponent
  };