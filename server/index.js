import path from 'path'
import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
app.use(cors({ origin: '*' }))

const server = http.createServer(app)

const io = new Server({
	cors: {
		origin: '*',
		methods: ['GET, POST'],
	},
})

app.get('/', (req, res) => {
	res.send('Hello world')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log('server start')
})
