const app = require('./src/app');

const { PORT } = require('./src/shared/defs');

app.listen(PORT, () => {
  console.log(`Server Listen in ${PORT} port.`);
});
