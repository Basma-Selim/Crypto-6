const axios = require('axios');
const fs = require('fs');
//const { callbackify } = require('util');
const APIKey = require('../private/API-Key.js');
const pathForSample =
	'/Users/selim/Documents/5.Formation RBK/7.Assessment/MVP/Crypto-6/database/sample_data_10DAYS.json';
// In this function, you'll use the request npm module to fetch a user's repositories from the Github API

async function gatherBitcoinInfos(callback) {
	const symbol_id = 'BITSTAMP_SPOT_BTC_USD';
	const period_id = '4HRS';
	const time_start = new Date(
		new Date().setDate(new Date().getDate() - 10)
	).toISOString();
	const url = `https://rest.coinapi.io/v1/ohlcv/${symbol_id}/history?period_id=${period_id}&time_start=${time_start}`;
	let options = {
		method: 'get',
		url: url,
		headers: {
			'X-CoinAPI-Key': `${APIKey.TOKEN}`,
			Accept: 'application/json',
			'Accept-Encoding': 'deflate, gzip',
		},
	};
	let awaitingRequest = await axios(options)
		.then((data) => {
			callback(data.data);
			fs.writeFile(pathForSample, JSON.stringify(data.data), (err, result) => {
				if (err) {
					throw err;
				}
			});
		})
		.catch((error) => console.log(error));
}

module.exports.gatherBitcoinInfos = gatherBitcoinInfos;
