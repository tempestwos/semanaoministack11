const express = require('express');
const cors = require('cors');

const rotes = require('./routes');

const app = express();

app.use(express.json());
app.use(rotes);
app.use(cors());

app.listen(3333);
