const connection = require('../database/db_connection');
const hashPassword = require('../../controllers/hashing');

const addUser = (reqBody) => {
	const { username, email, password } = reqBody;

	hashPassword(password)
		.then((hash) => {
			const sql = {
				text: 'INSERT INTO users(username,email,password) VALUES($1,$2,$3);',
				values: [username, email, hash],
			};
			connection.query(sql.text, sql.values, (error) => {
				if (error) throw error;
			});
		})
		.catch((err) => console.log(err));
};
module.exports = addUser;
