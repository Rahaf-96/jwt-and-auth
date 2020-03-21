const router = require('express').Router();
const { notFound, serverError } = require('./errors');
const { signupPath, serverErrorPath } = require('./paths');
const signupController = require('./signup');
const loginController = require('./login');
const cookieParser = require('cookie-parser');
const userAuthentication = require('./userauth');
const clearCookie = require('./logout');
router.use(cookieParser());

router.get('/signup', signupPath);
router.get('/server-error-test', serverErrorPath);
router.get('/username', userAuthentication);
router.get('/logout', clearCookie);
router.post('/signup', signupController);
router.post('/login', loginController);

router.use(serverError);
router.use(notFound);

module.exports = router;
