import express from "express";
import { authorization } from "../middlewares/authorization.js";
import { createCv, getALlCv, getCvById } from "../controllers/cv.controller.js";

const route = express.Router();

route.post("/", authorization, createCv);
route.get("/", authorization, getALlCv);
route.get("/:id", authorization, getCvById);

export const cvRoute = route;
