const Joi = require("joi");

module.exports.registerValidation = (userData) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(2).max(30).required(),

    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),

    password: Joi.string().min(5).required(),

    passwordConfirmation: Joi.ref("password"),
  });
  return schema.validate(userData);
};

module.exports.loginValidation = (userData) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(2).max(30).required(),

    password: Joi.string().min(5).required(),
  });
  return schema.validate(userData);
};
