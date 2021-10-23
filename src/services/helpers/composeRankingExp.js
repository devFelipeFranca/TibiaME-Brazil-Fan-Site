const DOMParser = require('dom-parser');
const { getRankingExp } = require('../api');

const composeRankingExp = async () => {
    const res = await getRankingExp()
     const DOM = new DOMParser().parseFromString(res.data, "text/html");
    const rakingList = [];

    for (
      counter = 1,
        indexName = 15,
        indexRaking = 14,
        indexLevel = 18,
        indexWorld = 17,
        indexCurrentExp = 4,
        indexClassType = 15;
      counter <= 100;
      counter += 1,
        indexRaking += 12 + counter,
        indexName += 10,
        indexLevel += 10,
        indexClassType += 10,
        indexWorld += 10,
        indexCurrentExp += 10
    ) {
      const aux = {
        name: DOM.getElementsByTagName("b")[indexName].getElementsByTagName(
          "a"
        )[0]?.innerHTML,
        currentLevel: DOM.getElementsByTagName("b")[indexLevel]?.innerHTML,
        world: DOM.getElementsByTagName("b")[indexWorld]?.innerHTML,
        classType:
          DOM.getElementsByTagName("b")[
            indexClassType
          ]?.parentNode?.innerHTML.split('"')[5],
        raking: counter,
      };
      rakingList.push(aux);
    }

    return rakingList;
}

module.exports = composeRankingExp;