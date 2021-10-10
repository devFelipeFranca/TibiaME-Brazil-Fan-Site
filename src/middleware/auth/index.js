const { jwtGenerate } = require('../../shared/utils/func');

const authUserToGetToken = async (req, res, next) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    res.status(400).send({ success: false, message: 'Some empty credentials' });
  }
  if (userName !== process.env.USER_NAME_API) {
    res.status(401).send({ success: false, message: 'Invalid credentials' });
  }

  if (password !== process.env.PASSWORD) {
    res.status(401).send({ success: false, message: 'Invalid credentials' });
  }

  const auth = {
    token: jwtGenerate({ userName, key: process.env.KEY }),
  };

  req.auth = auth;
  next();
};

module.exports = {
  authUserToGetToken,
};
