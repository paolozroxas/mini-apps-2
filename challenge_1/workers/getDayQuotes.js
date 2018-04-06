var GDAX = 'https://api.gdax.com/products/ETH-USD/candles';
const axios = require('axios');

var now = new Date(Date.now()).toISOString();
var start = new Date();
start.setHours(0,0,0,0);
start = start.toISOString();

axios({
  url: GDAX,
  params: {
    start: start,
    end: now,
    granularity: 900
  }
}).then((result) => {
  console.log(result.data);
  console.log(result.data.length)
}).catch((err) => {
  console.error(err);
});
