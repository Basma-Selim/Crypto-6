const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const CryptoCurrSchema = new mongoose.Schema({
	title: String,
	cryptoCurrency: String,
	FIATCurrency: String,
	period: String,
	data: String,
});

const CryptoCurr = mongoose.model('CryptoCurr', CryptoCurrSchema);

module.exports = CryptoCurr;
