const config = require('./config');

const authRouter = require('./routers/auth.routes');

const app = config();

app.use('/auth', authRouter);

module.exports = app;
