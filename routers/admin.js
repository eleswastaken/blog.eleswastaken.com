const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/post', adminController.getPost);
router.post('/post', adminController.postPost);

// router.get('/:slug', adminController.getPost);
/*

router.put('/:id', blogController.putPost);

*/
module.exports = router;
