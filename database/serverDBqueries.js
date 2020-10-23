const CryptoCurr = require('./CryptoCurr.js');

const retrieveData = () => {
	return CryptoCurr.find();
};

const updateValues = (postID) => {
	return CryptoCurr.findOneAndUpdate(
		{ _id: postID.CryptoCurrId },
		{
			/* Update instructions */
		},
		{ new: true }
	);
};

const createNewPost = (newPostData) => {
	return CryptoCurr.create(newPostData);
};

module.exports.retrieveData = retrieveData;
module.exports.incrementViews = incrementViews;
module.exports.createNewPost = createNewPost;
