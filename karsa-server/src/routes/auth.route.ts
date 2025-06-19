import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.controller'
import { validate } from '../middlewares/validate'
import { loginSchema, registerSchema } from '../validations/auth.schema'

const route = express.Router()

route.post('/register', validate(registerSchema) ,registerUser)
route.post('/login', validate(loginSchema),loginUser)

export const authRoute = route