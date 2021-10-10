const config = require('./config');

const app = config();

app.get('/', (req, res) => {
  res.send({ success: true });
});

module.exports = app;
