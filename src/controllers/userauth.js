const jwt = require('jsonwebtoken');

const userAuthentication = (req, res) => {
	jwt.verify(req.cookies.username, 'shhhh', (err, decoded) => {
		if (err) console.log(err);
		res.send(`<h1> Hello ${decoded.username} </h1>`);
	});
};

module.exports = userAuthentication;
