import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(4, "Nama minimal 4 karakter"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmpassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password wajib diisi"),
});
