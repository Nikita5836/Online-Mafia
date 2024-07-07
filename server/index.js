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

app.listen(5000, () => {
	console.log('server start')
})
