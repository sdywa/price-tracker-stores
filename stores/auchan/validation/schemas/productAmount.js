import Ajv from "ajv";

const ajv = new Ajv;
const schema = {
    type: "array",
    items: {
        type: "object",
        additionalProperties: false,
        required: ["location", "amount", "price"],
        properties: {
            amount: {
                type: "integer",
            },
            price: {
                type: "number",
            },
            location: {
                type: "object",
                additionalProperties: false,
                required: ["name", "latitude", "longitude"],
                properties: {
                    name: {
                        type: "string",
                    },
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
