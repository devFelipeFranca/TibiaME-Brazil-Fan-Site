let rakingExp = [];

const setRakingExp = async (data) => {
  rakingExp = data;
};

const getRakingExp = async () => {
  return rakingExp;
};

module.exports = {
  setRakingExp,
  getRakingExp,
};
