import 'dotenv/config'
import dbConnect from './libs/db.js';
import { server } from './server.js';

const { SERVER_PORT } = process.env
