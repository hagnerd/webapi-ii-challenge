const express = require('express');
const posts = require('./routes/posts');

const server = express();

// Allows us to parse the request body
server.use(express.json());

server.use('/posts', posts);

module.exports = server;
