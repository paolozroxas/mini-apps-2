const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const db = require('../database/model.js');

app.use(morgan('tiny'));
app.use(cors());

app.get('/api/eth', (req, res) => {
  db.getTodayPrices()
    .then((prices) => {
      res.send([currentPrice, prices]);
    })
})

var port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port', port));
