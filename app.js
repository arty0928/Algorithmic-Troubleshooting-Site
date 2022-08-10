const express = require('express');
const apiRouter = require('./routes/api');
const problemBoardRouter = require('./routes/problemBoard');
const problemRegisterRouter = require('./routes/problemRegister');
const problemRouter = require('./routes/problem');
const outdoorRouter = require('./routes/outdoor');

const app = express();

app.use('/api', apiRouter);
app.use('/problemBoard', problemBoardRouter);
app.use('/problemRegister', problemRegisterRouter);
app.use('/problem', problemRouter);
app.use('/outdoor', outdoorRouter);
app.use(express.static('public'));

app.listen(5000, _=>console.log("SERVER STARTED"));