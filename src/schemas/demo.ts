import Joi from "@hapi/joi";

export const demoSchema = Joi.object({
    type: Joi.string().valid("Demo", "demo").required(),
});
