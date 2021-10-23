const router = require('express').Router();

const { authUserToGetToken } = require('../middleware/auth');

const { sendToken } = require('../controllers/');

router.post('/token', authUserToGetToken, sendToken);

module.exports = router;
