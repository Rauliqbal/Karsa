import { Router } from "express";
import validate from "../middlewares/validate.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

import { authorization } from "../middlewares/authorization.js";
import { getUser, login, register } from "../controllers/auth.controller.js";
import { profileRoute } from "./profile.route.js";
import { cvRoute } from "./cv.route.js";
import { certificateRoute } from "./certificate.route.js";

const route = Router();

// ROUTE AUTHENTICATION
route.post("/auth/register", validate(registerSchema), register);
route.post("/auth/login", validate(loginSchema), login);
route.get("/auth/me", authorization, getUser);

// Profile
route.use("/profile", profileRoute);
route.use("/cv", cvRoute);
route.use("/certificate", certificateRoute);

export default route;
