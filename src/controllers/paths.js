const path = require('path');

const signupPath = (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'signup.html'));
};

const serverErrorPath = (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'));
};

module.exports = { signupPath, serverErrorPath };
