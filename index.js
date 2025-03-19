import express from 'express';
import route from './route/index.route.js';
import {cors} from './config/corsOptions.conf.js';

const server = express();
server.use(express.json());
server.use(cors);

const server_port = 3001;

server.use('/api', route);

server.listen(server_port, () => {
    console.log(`Server is running on port ${server_port}`);
});


