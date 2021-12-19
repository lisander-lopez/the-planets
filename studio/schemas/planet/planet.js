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
      },
      {
        title: "Main Color Of Planet",
        name: "mainColor",
        type: "colorlist",
        options: {
          tooltip: true,
          list: [
            {
              title: "Mercury",
              value: "#419EBB"
            },
            {
              title: "Venus",
              value: "#EDA249"
            },
            {
              title: "Earth",
              value: "#6D2ED5"
            },
            {
              title: "Mars",
              value: "#D14C32"
            },
            {
              title: "Jupiter",
              value: "#D83A34"
            },
            {
              title: "Saturn",
              value: "#CD5120"
            },
            {
              title: "Uranus",
              value: "#1EC1A2"
            },
            {
              title: "Neptune",
              value: "#2D68F0"
            }
          ]
        }
      },
      {
        title: "Secondary Color Of Planet",
        name: "secondaryColor",
        type: "colorlist",
        options: {
          tooltip: true,
          list: [
            {
              title: "Mercury",
              value: "#DEF4FC"
            },
            {
              title: "Venus",
              value: "#545BFE"
            },
            {
              title: "Earth",
              value: "#F7CC7F"
            },
            {
              title: "Mars",
              value: "#FF6A45"
            },
            {
              title: "Jupiter",
              value: "#ECAD7A"
            },
            {
              title: "Saturn",
              value: "#FCCB6B"
            },
            {
              title: "Uranus",
              value: "#65F0D5"
            },
            {
              title: "Neptune",
              value: "#497EFA"
            }
          ]
        }
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "planetName"
        },
        validation: Rule => Rule.required()
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