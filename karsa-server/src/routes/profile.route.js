import express from "express";
import {
  createProfile,
  getProfile,
} from "../controllers/profile.controller.js";
import validate from "../middlewares/validate.js";
import { profileSchema } from "../schemas/profile.shema.js";
import { authorization } from "../middlewares/authorization.js";
import { upload } from "../middlewares/upload.js";

const route = express.Router();

route.post(
  "/",
  authorization,
  validate(profileSchema),
  upload.single("photoUrl"),
  createProfile
);
route.get("/", authorization, getProfile);

export const profileRoute = route;
