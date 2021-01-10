require('dotenv').config({ path: '../config/dev.env' })
const http = require ('http')
const express = require('express')
const path = require('path')
const socketIO = require('socket.io')
const { send, disconnect } = require('process')
const app = express()
const server = http.createServer(app)

const io = socketIO(server)
const port = process.env.PORT||3000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
io.on('connection', (socket) => {
console.log ('new webSockt is on')

const message = 'welcome'
socket.emit('message',message)
socket.broadcast.emit('message','A new user has joined')

socket.on('send', (send) => {io.emit('brodcast',send)} )
socket.on('disconnect', () => {
    io.emit('message','A user has left')
})
socket.on('send-location',(location) => {
    io.emit('message','https://google.com/maps?q='+location.lat+','+location.long)
})
})

 server.listen(port, () => {
     console.log(`server is listening on port ${port}..` )
 })