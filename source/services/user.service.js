const userModel = require('../models/user.model')

const userService = {
  getAll: async () => {
    const users = await userModel.find({})
    return users
  },
  getUserByEmail: async (emailToSearch) => {
    const user = await userModel.findOne({ email: emailToSearch })
    return user
  },
  checkPassword(user, passwordToCheck) {
    return user.password == passwordToCheck
  },
  createUser: async (user) => {
    const userCreated = await userModel.create(user)
    return userCreated
  }
}

module.exports = { userService }