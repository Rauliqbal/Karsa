import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import routes from './routes'
import { errorHandler } from './middlewares/errorHandler'


dotenv.config()
const app = express()

// Midleware 
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/api/v1/', routes)

// Error Handler
app.use(errorHandler)

export default app
