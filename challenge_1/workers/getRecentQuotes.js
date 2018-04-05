var GDAX = 'wss://ws-feed.gdax.com';
const WebSocket = require('ws');
const ws = new WebSocket(GDAX);
const db = require('../database/model.js');

var currentPrice;

ws.on('open', () => {
  ws.send(JSON.stringify({
    "type": "subscribe",
    "channels": [{ "name": "ticker", "product_ids": ["ETH-USD"] }]
  }));
})

ws.on('message', (data) => {
  var message = JSON.parse(data);
  if (message.type === 'ticker'){
    currentPrice = message.price;
  }
});

setInterval(() => {
  console.log(currentPrice);
  db.insertPrices([{
    price: currentPrice,
    time: Date.now()
  }])
}, 60000);
