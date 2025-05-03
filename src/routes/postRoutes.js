const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

//Post routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

//for post comments
router.get('/:postId/comments', commentController.getCommentsByPostId);
router.post('/:postId/comments', commentController.createComment);


module.exports = router;
