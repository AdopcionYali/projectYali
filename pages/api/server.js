import express from  'express';
import cors from 'cors'
import routerUser from './routers/user.router.js'
import routerPost from './routers/post.router.js'

const server = express();

// Middlewares
server.use(express.json());
server.use(cors());

// Routers
server.get('/', (req, res) => res.json('Yali´s server OK!'))
server.use('/signup', routerUser)
server.use('/post', routerPost)

export { server }