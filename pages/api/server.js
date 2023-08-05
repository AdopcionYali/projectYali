import express from  'express';
import cors from 'cors'
import mongoose from 'mongoose';
import routerUser from './routers/user.router.js'
import routerPet from './routers/filter.router.js';

const server = express();

mongoose.connect('mongodb://localhost:3000/tests/posts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Middlewares
server.use(express.json());
server.use(cors());

// Routers
server.get('/', (req, res) => res.json('Yali´s server OK!'))
server.use('/signup', routerUser)
server.use('/filters', routerPet)


export { server }