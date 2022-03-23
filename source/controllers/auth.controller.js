const { userService } = require("../services/user.service")

const authController = {
  auth: async (request, response) => {
    const email = request.body.email
    const password = request.body.password
  
    if(!email || !password) {
      response.send({ error: 'Email e Senha é obrigatorio' })
      return
    }
  
    const user = await userService.getUserByEmail(email)
    if(!user) {
      response.send({ error: 'Usuário não existe' })
      return
    }
  
    const isValidPassword = userService.checkPassword(user, password)
    if(!isValidPassword) {
      response.send({ error: 'Esta senha esta incorreta' })
      return
    }
  
    response.send(user)
  },
  register: async (request, response) => {
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const email = request.body.email
    const password = request.body.password
  
    if(!firstName || !lastName || !email || !password) {
      response.send({
        error: 'Todos os campos são obrigatórios'
      })
      return
    }
  
    const userExists = await userService.getUserByEmail(email)
  
    if(userExists) {
      response.send({
        error: 'Usuário já existe'
      })
      return
    }
  
    const user = await userService.createUser({
      firstName,
      lastName,
      email,
      password
    })
    response.send(user)
  }
}

module.exports = { authController }