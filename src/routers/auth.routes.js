const router = require('express').Router();

const { authUserToGetToken } = require('../middleware/auth');

const { sendToken } = require('../controllers/');

router.post('/', authUserToGetToken, sendToken);

module.exports = router;
