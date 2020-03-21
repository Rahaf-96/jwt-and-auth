const bcrypt = require('bcryptjs');

const hashPassword = (plainPassword) => {
	return new Promise((resolve, reject) => {
		bcrypt.hash(plainPassword, 10, (err, hash) => {
			if (err) return reject(err);
			return resolve(hash);
		});
	});
};

module.exports = hashPassword;
