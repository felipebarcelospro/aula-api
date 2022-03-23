const express = require('express')

const { postController } = require('../controllers/post.controller')

const postRouter = express.Router()

postRouter.get('/', postController.getAllPosts)
postRouter.get('/:postId', postController.getPost)
postRouter.post('/', postController.createPost)
postRouter.put('/:postId', postController.updatePost)
postRouter.delete('/:postId', postController.deletePost)

module.exports = { postRouter }