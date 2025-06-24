import express from "express";
import { authorization } from "../middlewares/authorization.js";
import {
  createCv,
  deleteCv,
  getALlCv,
  getCvById,
} from "../controllers/cv.controller.js";

const route = express.Router();

route.post("/", authorization, createCv);
route.get("/", authorization, getALlCv);
route.get("/:id", authorization, getCvById);
route.delete("/:id", authorization, deleteCv);

export const cvRoute = route;
