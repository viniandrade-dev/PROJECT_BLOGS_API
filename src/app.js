const express = require('express');
const authLoginRouter = require('./routes/authLogin.routes');
const authUserRouter = require('./routes/authUser.routes');
const categoryRouter = require('./routes/category.routes');

const app = express();

app.use(express.json());

app.use('/login', authLoginRouter);
app.use('/user', authUserRouter);
app.use('/categories', categoryRouter);

module.exports = app;
