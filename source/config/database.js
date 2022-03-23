const mongoose = require('mongoose')

const mongoDBConnect = async () => {
  await mongoose.connect('mongodb://docker:docker@localhost:27017/aula-api?authSource=admin')
  console.log('Server -> MongoDB connected')
}

module.exports = { database: mongoDBConnect }