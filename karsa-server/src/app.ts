import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'


dotenv.config()
const app = express()

// middleware
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

export default app