const axios = require('axios');
const { get } = require('jquery');
const config = require('../config.js');
let saveRepos = require('../database/index');
// In this function, you'll use the request npm module to fetch a user's repositories from the Github API

async function getReposByUsername(username) {
	let options = {
		method: 'get',
		url: `https://api.github.com/users/${username}/repos`,
		headers: {
			'User-Agent': 'request',
			Authorization: `token ${config.TOKEN}`,
		},
	};

	let res = await axios(options).then((data) => {
		saveRepos.saveRepos(username, data.data);
	});
}

module.exports.getReposByUsername = getReposByUsername;
