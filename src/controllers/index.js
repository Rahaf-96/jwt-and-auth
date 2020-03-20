const router = require('express').Router();
const { notFound, serverError } = require('./errors');
const path = require('path');

router.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'signup.html'));
});

router.get('/server-error-test', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'));
});

router.use(serverError);
router.use(notFound);

module.exports = router;
