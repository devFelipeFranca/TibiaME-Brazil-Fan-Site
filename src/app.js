const config = require('./config');

const authRouter = require('./routers/auth.routes');
const rankingRouter = require('./routers/ranking.routes');
const infosRouter = require('./routers/infos.routes');

const app = config();

app.use('/auth', authRouter);
app.use('/ranking', rankingRouter);
app.use('/infos', infosRouter);

module.exports = app;
