const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const plantRoutes = require('./routes/plants')
server.use('/api/v1/plants', plantRoutes)

module.exports = server
