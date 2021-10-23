const { jwtVerify } = require('../shared/utils/func');
const { findCharacterInfos } = require('../services/infos.service');
const { getRakingExp } = require('../data/rakingExp');

module.exports = {
  sendToken: async (req, res) => {
    const { token } = req.auth;

    const response = {
      success: true,
      message: 'Authentication successfully',
      token: `bearer ${token}`,
    };

    res.status(200).send(JSON.stringify(response));
  },
  sendCharacterInfos: async (req, res) => {
    const token = req.headers?.auth?.split(' ')[1];
    const { charName, world } = req.query;
    if (!charName || !world) {
      res.status(400).send({ success: false, message: 'Invalid infos' });
    }

    try {
      const isAuthenticated = jwtVerify({ token, key: process.env.KEY });
      if (isAuthenticated) {
        const data = await findCharacterInfos({ charName, world });
        res.status(200).send(data);
      }
    } catch (e) {
      res.status(401).send({ success: false, message: e.message });
    }
  },
  sendRakingExp: async (req, res) => {
    const token = req.headers?.auth?.split(' ')[1];

    try {
      const isAuthenticated = jwtVerify({ token, key: process.env.KEY });
      if (isAuthenticated) {
        const data = await getRakingExp();
        res.status(200).send(data);
      }
    } catch (e) {
      res.status(401).send({ success: false, message: e.message });
    }
  },
};
