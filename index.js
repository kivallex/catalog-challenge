// server side
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // allowing connection between client and server

const app = express();

app.use(cors('*'));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

require('./api')(app);

app.listen(PORT);
