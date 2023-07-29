import express from  'express';
import cors from 'cors'

const server = express();

// Middlewares
server.use(express.json());
server.use(cors());

// Routers
server.get('/', (req, res) => res.json("Yali´s server OK!"))


export { server }