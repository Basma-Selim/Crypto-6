const express = require('express');
const bodyParser = require('body-parser');
const { gatherBitcoinInfos } = require('../fetchers/cryptoFetchers.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/CryptoCurr', function (req, res) {
	gatherBitcoinInfos((response) => {
		res.send(response);
	});
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
