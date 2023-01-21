
const showdown = require('showdown');
const jwt = require('jsonwebtoken');
const Post = require('../models/post');
const User = require('../models/user');

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



exports.getLogIn = function(req, res) {
	if (!req.cookies) {
		res.render('admin/login');
		return
	}

	const token = req.cookies.jwt_token;

	if (!token) {
		res.render('admin/login');
		return
	}

	jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
		if (err) {
			res.render('admin/login');
			return
		} 

		// check whether the decoded data is in the db
		User.findById(decoded.id).exec( (err, user) => {
			if (err || !user) {
				res.status(404).send('User does not exist');
				return
			}
			res.redirect('/admin/post');
		})
	});
}

exports.postLogIn = async function(req, res) {
	const { email, password } = req.body;
	if (!( email && password )) {
		res.sendStatus(400);
		return
	}

	const user = await User.findOne({ email });
	if (!user) {
		res.sendStatus(400);
		return 
	}
	
	if (user.password === password) {
		const token = jwt.sign( 
			{ email, id: user._id },
			process.env.JWT_KEY,
		);
		res.cookie('jwt_token', token, {
			httpOnly: true,
		});
		res.redirect('/admin/post');	
		return
	}

	res.status(400).send('Incorrect password');
}


exports.logOut = function(req, res) {
	res.clearCookie('jwt_token');
	res.redirect('/');
}

