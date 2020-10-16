const express = require('express');
const bodyParser = require('body-parser');
const { gatherBitcoinInfos1Day } = require('../fetchers/cryptoFetchers.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/CryptoCurr', function (req, res) {
	gatherBitcoinInfos1Day((response) => {
		res.send(response);
	});
});

app.post('/api/CryptoCurr', function (req, res) {
	//console.log(req.body);
});

/* app.patch('/api/CryptoCurr/:blogId', function (req, res) {
	incrementViews(req.params).then((response) => {
		res.send(response);
	});
});
 */
app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
