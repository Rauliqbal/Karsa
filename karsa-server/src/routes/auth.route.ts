import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/auth.controller";
import { validate } from "../middlewares/validate";
import { loginSchema, registerSchema } from "../validations/auth.schema";
import { accessValidation } from "../middlewares/accesValidation";

const route = express.Router();

route.post("/register", validate(registerSchema), registerUser);
route.post("/login", validate(loginSchema), loginUser);
route.get("/user", accessValidation, getUser);

export const authRoute = route;
