const express = require('express');
const indexRouter = require('./routes/index');
const problemRouter = require('./routes/problem');

const app = express();

app.get('/', indexRouter);
app.get('/problem', problemRouter);

app.listen(5000, _=>console.log("SERVER STARTED"));