const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
})

userSchema.set('timestamps', true)
module.exports = model('user', userSchema)