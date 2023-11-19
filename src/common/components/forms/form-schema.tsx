import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string()
    .required()
    .alphanum()
    .messages({
      'string.empty': 'Name is required',
      'any.required': 'Name is required',
    }),
  email: Joi.string().email({ minDomainSegments: 2, tlds: {} }).required().messages({
    'string.empty': 'Email id required',
    'any.required': 'Email id required',
  }),
  message: Joi.string().label('message').messages({
    'string.empty': 'Technology is required',
    'any.required': 'Technology is required',
  }),
});

export default schema;
