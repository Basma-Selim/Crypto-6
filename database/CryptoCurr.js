const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const CryptoCurrSchema = new mongoose.Schema({
	title: String,
	CryptoCurrency: String,
	FIATCurrency: String,
	body: String,
	data: String,
});

const CryptoCurr = mongoose.model('Blog', CryptoCurrSchema);

module.exports = CryptoCurr;
