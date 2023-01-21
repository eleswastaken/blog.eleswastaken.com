
const showdown = require('showdown');
const Post = require('../models/post');

exports.getIndex = function(req, res) {

	// const limit = req.query.number || 9;

	// Post.find().limit(limit).exec( (err, posts) => {
	Post.find().exec( (err, posts) => {
		res.render('postsIndex', { posts })
	});

}

exports.getPost = async function(req, res) {

	const post = await Post.findOne({ slug: req.params.slug });
  console.log(req.params.slug)

	if (!post) {
		res.sendStatus(404)
		return 
	}

	converter = new showdown.Converter();

	htmlBody = converter.makeHtml(post.content)
	post.html = htmlBody

	res.render('postIndex', { post });

}
