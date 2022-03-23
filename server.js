require('dotenv').config()

const express = require('express');
const cors = require('cors');

const { userRouter } = require('./source/routes/user.routes');
const { authRouter } = require('./source/routes/auth.router');
const { database } = require('./source/config/database');
const { postRouter } = require('./source/routes/post.router');

const server = express();

/* Setup */
server.use(cors());
server.use(express.json());

/* Routes */
server.use('/users', userRouter)
server.use('/auth', authRouter)
server.use('/posts', postRouter)

/* Database */
database()

server.listen(process.env.PORT, () => {
  console.log(`Server -> Started on port ${process.env.PORT}`);
})