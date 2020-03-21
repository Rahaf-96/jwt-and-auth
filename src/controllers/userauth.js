const jwt = require('jsonwebtoken');

const userAuthentication = (req, res) => {
	jwt.verify(req.cookies.username, 'shhhh', (err, decoded) => {
		if (err) res.status(400).send('<h1>Not Authorized</h1>');
		res
			.status(200)
			.send(
				`<h1> Hello ${decoded.username} </h1> <h1> <a href='/logout'>Log out</a></h1>`,
			);
	});
};

module.exports = userAuthentication;
