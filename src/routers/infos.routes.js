const router = require('express').Router();

const useController = require('../controllers/');

router.get('/', useController.sendCharacterInfos);

module.exports = router;
