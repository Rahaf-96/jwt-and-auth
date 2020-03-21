const clearCookie = (req, res) => {
	res.clearCookie('username');
	res.redirect('/');
};

module.exports = clearCookie;
