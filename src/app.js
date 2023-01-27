const express = require('express');
const authLoginRouter = require('./routes/authLogin.routes');

const app = express();

app.use(express.json());

app.use('/login', authLoginRouter);

module.exports = app;
