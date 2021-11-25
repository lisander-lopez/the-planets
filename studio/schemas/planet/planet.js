export const planet = {
    name: "planet",
    title: "Planet",
    type: "document",
    fields: [
      {
        title: "Planet Name",
        name: "planetName",
        type: "text",
        rows: 1
      },
      {
        title: "Rotation Time",
        name: "rotationTime",
        type: "timeUnit"
      },
      {
        title: "Revolution Time",
        name: "revolutionTime",
        type: "timeUnit"
      },
      {
        title: "Radius",
        name: "radius",
        type: "distance"
      },
      {
        title: "Average Temperature",
        name: "averageTemperature",
        type: "temperature"
      },
      {
        title: "Key Points of Planet",
        name: "keyPoints",
        type: "array",
        of: [
            {type: "keyPoint"}
        ]
      }
    ],
    preview: {
      select: {
        title: "planetName"
      }
    },
    options: {
      columns: 2
    }
  };