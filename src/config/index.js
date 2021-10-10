const express = require('express');
require('dotenv').config();

const config = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  return app;
};

module.exports = config;
