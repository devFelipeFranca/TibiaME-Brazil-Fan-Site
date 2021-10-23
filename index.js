const app = require('./src/app');
const findRakingExp = require('./src/services/rakingExp.service');

const { PORT } = require('./src/shared/defs');

app.listen(PORT, async () => {
  console.log(`Server Listen in ${PORT} port.`);
  await findRakingExp();
  setInterval(() => {
    (async () => {
  await findRakingExp();

    })();
  }, 600000); // 1 hour
});
