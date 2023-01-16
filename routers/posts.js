
const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts');

router.get('/', postsController.getIndex);

router.get('/posts/:slug', postsController.getPost);
/*

router.put('/:id', blogController.putPost);

*/
module.exports = router;
