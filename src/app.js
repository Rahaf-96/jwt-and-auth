const express = require('express');
const router = require('./controllers');
const path = require('path');
const app = express();

app.use(express.json());

app.use(router);
router.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
