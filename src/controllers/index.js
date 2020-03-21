const router = require('express').Router();
const { notFound, serverError } = require('./errors');
const path = require('path');
const signupController = require('./signup');
const loginController = require('./login');
const cookieParser = require('cookie-parser');
const userAuthentication = require('./userauth');

router.use(cookieParser());

router.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'signup.html'));
});
router.get('/server-error-test', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'));
});

router.get('/username', userAuthentication);

router.post('/signup', signupController);
router.post('/login', loginController);

router.use(serverError);
router.use(notFound);

module.exports = router;
