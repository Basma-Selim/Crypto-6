const CryptoCurr = require('./CryptoCurr.js');

const retrieveData = () => {
	return CryptoCurr.find();
};

const incrementViews = (postID) => {
	return CryptoCurr.findOneAndUpdate(
		{ _id: postID.CryptoCurrId.substring(1) },
		{ $inc: { views: 1 } },
		{ new: true }
	);
};

const createNewPost = (newPostData) => {
	return CryptoCurr.create(newPostData);
};

module.exports.retrieveData = retrieveData;
module.exports.incrementViews = incrementViews;
module.exports.createNewPost = createNewPost;
