const composeCharacterInfos = require('./helpers/composeCharacterInfos');

const findCharacterInfos = async ({ charName, world }) => {
  const data = await composeCharacterInfos({
    charName,
    world,
  });
  return data;
};

module.exports = {
  findCharacterInfos,
};
