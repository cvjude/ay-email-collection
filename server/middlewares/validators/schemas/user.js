import Joi from '@hapi/joi';

export const createUser = Joi.object().keys({
  fullName: Joi.string()
    .regex(/^[A-Za-z]{3,}$/)
    .trim()
    .required(),
  email: Joi.string().email().required().lowercase().trim(),
  phoneNumber: Joi.string(),
});
