const router = require('express').Router();
const useController = require('../controllers');

router.get('/exp', useController.sendRakingExp);

router.get('/conquest', (req, res) => {
  res.status(200).send({ title: 'ranking Infos conquest', success: true });
});

module.exports = router;
