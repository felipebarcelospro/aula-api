const postModel = require("../models/post.model")

const postService = {
  getAllPosts: async () => {
    const posts = await postModel.find({})
    return posts
  },
  getPost: async (postId) => {
    const post = await postModel.findOne({ _id: postId })
    return post
  },
  createPost: async (data) => {
    const post = await postModel.create(data)
    return post
  },
  updatePost: async (postId, data) => {
    const post = await postModel.findOneAndUpdate({ _id: postId }, data, { new: true })
    return post
  },
  deletePost: async (postId) => {
    await postModel.findOneAndDelete({ _id: postId })
  }
}

module.exports = { postService }