import { register } from 'module'
import {z} from 'zod'

export const registerSchema = z.object({
  name: z.string().min(6, "Nama harus memiliki 6 karakter"),
  email : z.string().email('Email tidak valid'),
  password : z.string().min(6, "Password harus memiliki 6 karakter"),
  confirmPassword : z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak sama",
  path: ["confirmPassword"]
})