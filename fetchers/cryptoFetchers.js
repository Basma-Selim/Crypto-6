const axios = require('axios');
const fs = require('fs');
const APIKey = require('../private/API-Key.js');
const period = {
	1: '10MIN',
	10: '4HRS',
	365: '5DAY',
};
async function gatherBitcoinInfos(timeStart, callback) {
	const pathForSample = `/Users/selim/Documents/5.Formation RBK/7.Assessment/MVP/Crypto-6/database/sample_data_${timeStart}DAYS.json`;
	const symbol_id = 'BITSTAMP_SPOT_BTC_USD';
	const period_id = period[timeStart];
	const time_start = new Date(
		new Date().setDate(new Date().getDate() - Number(timeStart))
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
		.catch((error) => callback(error));
}

module.exports.gatherBitcoinInfos = gatherBitcoinInfos;
