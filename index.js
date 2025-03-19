import express from 'express';
import route from './route/index.route.js';

const server = express();
server.use(express.json());

const server_port = 3001;

server.use('/api', route);

server.listen(server_port, () => {
    console.log(`Server is running on port ${server_port}`);
});


