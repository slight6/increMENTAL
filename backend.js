
const express = require('express')
const app = express()

// setup socket.io

const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, { pingInterval: 3000, pingTimeout: 7500 })

const port = 3000 

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const connectedPlayers = {}
const 
