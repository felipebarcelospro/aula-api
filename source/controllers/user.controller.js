const { userService } = require("../services/user.service")

const userController = {
  getAll: async (request, response) => {
    const users = await userService.getAll()
    response.json(users)
  },
  getUserByEmail: async (request,response) => {
    const { email } = request.params

    const user = await userService.getUserByEmail(email)
    
    response.send(user)
  }
}

module.exports = { userController }