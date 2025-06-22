import express from "express";
import { createProfile } from "../controllers/profile.controller.js";
import validate from "../middlewares/validate.js";
import { profileSchema } from "../schemas/profile.shema.js";
import { authorization } from "../middlewares/authorization.js";
import { upload } from "../middlewares/upload.js";

const route = express.Router();

route.post(
  "/",
  upload.single("photoUrl"),
  authorization,
  validate(profileSchema),
  createProfile
);

export const profileRoute = route;
