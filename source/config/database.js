const mongoose = require('mongoose')

const mongoDBConnect = async () => {
  await mongoose.connect(process.env.DATABASE_URL)
  console.log('Server -> MongoDB connected')
}

module.exports = { database: mongoDBConnect }