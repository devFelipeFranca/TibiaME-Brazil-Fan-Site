const DOMParser = require('dom-parser');
const { getCharacterInfos } = require('../api');
const { serializeDateFromCurrentDay } = require('../../shared/utils/func');

const composeCharacterInfos = async ({ charName, world }) => {
  const res = await getCharacterInfos({ charName, world });
  const lastSevenDaysOrdered = serializeDateFromCurrentDay();
  const DOM = new DOMParser().parseFromString(res.data, 'text/html');
  const accountName = DOM.getElementsByTagName('b')[11]?.innerHTML;

  if (!accountName) return { message: "character doesn't have raking" };

  const characterInfos = {
    name: DOM.getElementsByTagName('b')[11]?.innerHTML,
    world:
      DOM.getElementsByTagName('b')[10].getElementsByTagName('a')[0]?.innerHTML,
    currentLevel: DOM.getElementsByTagName('b')[8]?.innerHTML,
    classType: DOM.getElementsByTagName('b')[13]?.innerHTML.split('>')[1],
    currentExp: DOM.getElementsByTagName('b')[16]?.innerHTML.split(' ')[1],
    currentExpToNextLevel: DOM.getElementsByTagName('td')[9]
      ?.innerHTML.split('<')[0]
      .split(' ')[0],
    lastWeekExp: [
      DOM.getElementsByTagName('table')[4]
        .getElementsByTagName('b')[1]
        ?.innerHTML.split(' ')[0],
      DOM.getElementsByTagName('table')[4]
        .getElementsByTagName('b')[3]
        ?.innerHTML.split(' ')[0],
      DOM.getElementsByTagName('table')[4]
        .getElementsByTagName('b')[5]
        ?.innerHTML.split(' ')[0],
      DOM.getElementsByTagName('table')[4]
        .getElementsByTagName('b')[7]
        ?.innerHTML.split(' ')[0],
      DOM.getElementsByTagName('table')[4]
        .getElementsByTagName('b')[9]
        ?.innerHTML.split(' ')[0],
      DOM.getElementsByTagName('table')[4]
        .getElementsByTagName('b')[11]
        ?.innerHTML.split(' ')[0],
      DOM.getElementsByTagName('table')[4]
        .getElementsByTagName('b')[13]
        ?.innerHTML.split(' ')[0],
    ],
    lastWeekDays: [...lastSevenDaysOrdered],
  };

  return characterInfos;
};

module.exports = composeCharacterInfos;
