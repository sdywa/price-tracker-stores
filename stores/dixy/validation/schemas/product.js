import Ajv from "ajv";

const ajv = (new Ajv());
const schema = {
    type: "object",
    additionalProperties: false,
    required: [],
    properties: {},
};

export default ajv.compile(schema);
