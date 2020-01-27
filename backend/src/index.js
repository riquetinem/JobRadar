const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const defaultPort = 3333;

// connection mongoose here

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(defaultPort, () => {
  return console.log(`BACKEND IN PORT ${defaultPort}`)
});