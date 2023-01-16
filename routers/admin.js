const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

const authMiddleware = require('../middleware/auth');

router.get('/post', authMiddleware, adminController.getPost);

router.post('/post', authMiddleware, adminController.postPost);

router.get('/log-in', adminController.getLogIn);

router.post('/log-in', adminController.postLogIn);

router.get('/log-out', adminController.logOut);

// router.get('/:slug', adminController.getPost);
/*

router.put('/:id', blogController.putPost);

*/
module.exports = router;
