import http from 'http'
import express from 'express'
import morgan from 'morgan'

// import './database/db.js'

import cors from 'cors'

import { config } from 'dotenv'
config()

const app = express()

const corsOptions = {
    origin: '*'
}

app.use(morgan('dev'))
app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message : 'Welcome to the API GEOLOGY'})
})

const httpServer = http.createServer(app)

httpServer.listen(process.env.PORT, () => {
    console.log('Server up running')
})