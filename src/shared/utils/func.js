const jwt = require('jsonwebtoken');

const jwtGenerate = ({ userName, key }) => {
  const token = jwt.sign(
    {
      data: {
        userName: userName,
        key: key,
        authenticated: true,
      },
    },
    key,
    { expiresIn: '1h' }
  );
  return token;
};

const jwtVerify = ({ token, key }) => {
  const decoded = jwt.verify(token, key);
  const currentTimestamp = Math.floor(+new Date() / 1000);
  if (decoded.exp < currentTimestamp) return false;
  return true;
};

module.exports = {
  jwtGenerate,
  jwtVerify,
};
