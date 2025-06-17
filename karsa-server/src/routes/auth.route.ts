import express from 'express'
import { registerUser } from '../controllers/auth.controller'

const route = express.Router()

route.post('/register', registerUser)


export const authRoute = route