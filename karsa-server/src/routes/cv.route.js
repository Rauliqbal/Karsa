import express from "express";
import { authorization } from "../middlewares/authorization.js";
import { createCv } from "../controllers/cv.controller.js";

const route = express.Router();

route.post("/", authorization, createCv);

export const cvRoute = route;
