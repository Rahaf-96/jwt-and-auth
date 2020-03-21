const connection = require('../database/db_connection');

const checkEmail = (reqbody) => {
	return new Promise((resolve, reject) => {
		const { email } = reqbody;
		const sql = {
			text: 'select * from users where email = $1;',
			values: [email],
		};
		connection.query(sql.text, sql.values, (err, res) => {
			try {
				resolve(res.rows);
			} catch {
				reject(err);
			}
		});
	});
};

module.exports = checkEmail;
