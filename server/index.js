const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express()

const server = http.createServer(app);
const io = socketIo(server);

server.listen(5000);