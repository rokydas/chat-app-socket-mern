const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');

const router = require('./router');

const app = express()
app.use(cors())

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => { 
    console.log("A user connected")

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room)

        callback()
    })

    socket.on('disconnect', () => {
        console.log("User had left!!!")
    })
})

app.use(router);

server.listen(5000);