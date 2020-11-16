import Joi from '@hapi/joi';

export const createUser = Joi.object().keys({
  fullName: Joi.string().trim().required(),
  email: Joi.string().email().required().lowercase().trim(),
  phoneNumber: Joi.string(),
});
