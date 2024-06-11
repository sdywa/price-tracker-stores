import Ajv from "ajv";

const ajv = new Ajv();
const schema = {
    type: "array",
    items: {
        type: "object",
        additionalProperties: false,
        required: ["id", "location", "name"],
        properties: {
            id: {
                type: "integer",
            },
            name: {
                type: "string",
            },
            location: {
                type: "object",
                additionalProperties: false,
                required: ["latitude", "longitude"],
                properties: {
                    latitude: {
                        type: "string",
                    },
                    longitude: {
                        type: "string",
                    },
                },
            },
        },
    },
};

export default ajv.compile(schema);
