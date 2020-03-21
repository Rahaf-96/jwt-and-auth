const checkEmail = require('../models/queries/checkemail');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginValidate = (req, res) => {
	const userInfo = req.body;
	checkEmail(userInfo)
		.then((result) => {
			if (result.length !== 0) {
				const plainPass = userInfo.password;
				const hashedPass = result[0].password;
				bcrypt.compare(plainPass, hashedPass).then((compareResult) => {
					if (compareResult) {
						jwt.sign(
							{ username: result[0].username },
							'shhhh',
							(err, token) => {
								res
									.cookie('username', token)
									.status(200)
									.json({ message: 'logged in successfully' });
							},
						);
					} else {
						res
							.status(400)
							.json({ message: 'your email or password is incorrect' });
					}
				});
			} else {
				res
					.status(400)
					.json({ message: 'your email or password is incorrect' });
			}
		})
		.catch((err) => console.log(err));
};

module.exports = loginValidate;
