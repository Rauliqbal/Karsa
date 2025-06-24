import express from "express";
import { authorization } from "../middlewares/authorization.js";
import validate from "../middlewares/validate.js";
import { certificateSchema } from "../schemas/certificate.schema.js";
import { createCertificate } from "../controllers/certificate.controller.js";

const route = express.Router();

route.post("/", authorization, validate(certificateSchema), createCertificate);

export const certificateRoute = route;
