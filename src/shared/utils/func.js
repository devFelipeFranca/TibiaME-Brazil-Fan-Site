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
  if (!token || !key) return false;

  const decoded = jwt.verify(token, key);
  const currentTimestamp = Math.floor(+new Date() / 1000);
  if (decoded.exp < currentTimestamp) return false;
  return true;
};

const serializeDateFromCurrentDay = () => {
  const today = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const reverseType = (array = []) => {
    const firstPosition = array.shift();
    array.reverse();
    return [firstPosition, ...array];
  };
  const LENGTH = days.length;
  const orderedDays = [];
  for (let index = today.getDay(); index < LENGTH; index += 1) {
    orderedDays.push(days[index]);
  }
  for (let index = 0; index < today.getDay(); index += 1) {
    orderedDays.push(days[index]);
  }

  return reverseType(orderedDays);
};

module.exports = {
  jwtGenerate,
  jwtVerify,
  serializeDateFromCurrentDay,
};
