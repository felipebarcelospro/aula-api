const { postService } = require("../services/post.service")

const postController = {
  getAllPosts: async (request, response) => {
    const posts = await postService.getAllPosts()
    response.send(posts)
  },
  getPost: async (request, response) => {
    const { postId } = request.params

    if(!postId) {
      response.status(400).send({ error: 'Post id é obrigatório' })
      return
    }

    const post = await postService.getPost(postId)
    if(!post) {
      response.status(404).send({ error: 'Post não existe' })
      return
    }

    response.send(post)
  },
  createPost: async (request, response) => {
    const { title, content } = request.body

    if(!title || !content) {
      response.status(400).send({ error: 'Todos os campos são obrigatórios' })
      return
    }

    const post = await postService.createPost({
      title, content
    })

    response.status(201).send(post)
  },
  updatePost: async (request, response) => {
    const { postId } = request.params
    const { title, content } = request.body

    if(!postId || !title || !content) {
      response.status(400).send({ error: 'Todos os campos são obrigatórios' })
      return
    }

    const postAlreadyExists = await postService.getPost(postId)
    if(!postAlreadyExists) {
      response.status(404).send({ error: 'Post não existe' })
      return
    }

    const post = await postService.updatePost(postId, {
      title, content
    })
    response.send(post)
  },
  deletePost: async (request, response) => {
    const { postId } = request.params

    if(!postId) {
      response.status(400).send({ error: 'Post id é obrigatório' })
      return
    }

    const postAlreadyExists = await postService.getPost(postId)
    if(!postAlreadyExists) {
      response.status(404).send({ error: 'Post não existe' })
      return
    }

    await postService.deletePost(postId)
    response.send()
  }
}

module.exports = { postController }