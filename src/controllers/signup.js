const joi = require('@hapi/joi');
const addUser = require('../models/queries/adduser');
const checkEmail = require('../models/queries/checkemail');

const validationObject = {
	username: joi
		.string()
		.min(2)
		.max(40),
	email: joi
		.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		})
		.min(10),
	password: joi
		.string()
		.alphanum()
		.min(6)
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])')),
	verifiedPassword: joi.ref('password'),
};

const schema = joi.object(validationObject);

const signupValidation = (req, res) => {
	const { error, value } = schema.validate(req.body);
	if (error) res.status(400).json({ error });
	else {
		checkEmail(value)
			.then((result) => {
				if (result.length !== 0) {
					res.status(400).json({
						message: 'email already exists',
					});
				} else {
					addUser(value);
					res.status(200).json({
						message: 'User created successfully',
						username: value.username,
					});
				}
			})
			.catch((err) => console.log(err));
	}
};

module.exports = signupValidation;
