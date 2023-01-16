
const showdown = require('showdown');
const Post = require('../models/post');

exports.getPost = function(req, res) {
  // GET NEW POST TEMPLATE

  res.render('admin/post')

}

exports.postPost = function(req, res) {
  // CREATE NEW POST

  //TODO Error handling
  const post = Post({
    title: req.body.title,
    content: req.body.content,
    // TODO generating slug
    slug: req.body.title + '-slug',
  })

  post.save()

  res.sendStatus(201)
}

