const axios = require('axios');

const createApi = async () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  return api;
};

const request = async (resource, successCode = 200, method = 'get', body) => {
  const api = await createApi();

  const result = {};

  try {
    const res = await api[method](resource, body);
    result.success = res.status === successCode;
    result.code = res.status;
    result.description = res.statusText;
    result.headers = res.headers;
    result.data = res.data;
  } catch (err) {
    const error = err;
    result.success = false;
    result.code = error.response.status;
    result.description = error.message;
    result.headers = null;
    result.data = error.response.data;
  } finally {
    return result;
  }
};

module.exports = {
  getCharacterInfos: async ({ charName, world }) => {
    const url = `/?p=Character&name=${charName}&world=${world}`;
    return await request(url);
  },
  getRankingExp: async () => {
    const url = '/?p=Highscores';
    return await request(url);
  },
};
