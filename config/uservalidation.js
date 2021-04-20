const joi = require("joi");
//registration user validation
const validateAddUser = new Joi.object( {
    name: Joi.string().min(4).require().max(150),
    email: Joi.string().min(10).max(200).email().required(),
    password: Joi.string().min(8).max(50).require(),
});
module.exports = { validateAddUser };