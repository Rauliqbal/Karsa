import express from 'express'
import { registerUser } from '../controllers/auth.controller'
import { validate } from '../middlewares/validate'
import { registerSchema } from '../validations/auth.schema'

const route = express.Router()

route.post('/register', validate(registerSchema) ,registerUser)


export const authRoute = route