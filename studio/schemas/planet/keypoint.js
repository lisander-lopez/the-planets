export const keyPoint = {
    name: "keyPoint",
    title: "Key Point",
    type: "object",
    fields: [
        {
            title: "Key Point Picture",
            name: "picture",
            type: "image",
        },
        {
            title: "Title",
            name: "keyPointTitle",
            type: "text",
            rows: 1
        },
        {
            title: "Summary",
            name: "keyPointText",
            type: "array",
            of: [{type: 'block'}]
        },
        {
            title: "Source Name",
            name: "sourceName",
            type: "text",
            rows: 1
        },
        {
            title: "Source URL",
            name: "sourceURL",
            type: "url"
        }
    ],
    preview: {
        select: {
            title: 'keyPointTitle'
        }
    }
};
