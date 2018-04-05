const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/CryptoQuote');
const db = mongoose.connection;

db.on('error', () => {
  throw 'Mongoose connection error';
});
var ethPriceSchema = mongoose.Schema({
  price: Number,
  time: Date
});
var EthPrice = mongoose.model('EthPrice', ethPriceSchema);

module.exports.insertPrices = (values) => {
  return EthPrice.insertMany(values);
}

module.exports.getTodayPrices = () => {
  var today = new Date(Date.now());
  var start = new Date(
    today.getYear(),
    today.getMonth(),
    today.getDay()
  );
  return EthPrice.find({
    time: { '$gte': start, '$lt': today }
  })
}
