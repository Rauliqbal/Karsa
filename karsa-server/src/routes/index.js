import { Router } from "express";
import validate from "../middlewares/validate.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { login, register } from "../controllers/auth.profile.js";

const route = Router();

// ROUTE AUTHENTICATION
route.post("/auth/register", validate(registerSchema), register);
route.post("/auth/login", validate(loginSchema), login);

export default route;
