const composeRankingExp = require('./helpers/composeRankingExp')
const { setRakingExp } = require('../data/rakingExp')

const findRakingExp = async () => {
    const data = await composeRankingExp()
    setRakingExp(data)
}

module.exports = findRakingExp