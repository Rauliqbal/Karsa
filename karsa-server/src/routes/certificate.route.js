import express from "express";
import { authorization } from "../middlewares/authorization.js";
import validate from "../middlewares/validate.js";
import { certificateSchema } from "../schemas/certificate.schema.js";
import {
  createCertificate,
  deleteCertificate,
  getCertificate,
  updateCertificate,
} from "../controllers/certificate.controller.js";

const route = express.Router();

route.post("/", authorization, validate(certificateSchema), createCertificate);
route.get("/", authorization, getCertificate);
route.put(
  "/:id",
  authorization,
  validate(certificateSchema),
  updateCertificate
);
route.delete("/:id", authorization, deleteCertificate);
export const certificateRoute = route;
