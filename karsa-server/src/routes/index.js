import { Router } from "express";
import validate from "../middlewares/validate.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { getUser, login, register } from "../controllers/auth.profile.js";
import { authorization } from "../middlewares/authorization.js";

const route = Router();

// ROUTE AUTHENTICATION
route.post("/auth/register", validate(registerSchema), register);
route.post("/auth/login", validate(loginSchema), login);
route.get("/auth/me", authorization, getUser);
export default route;
