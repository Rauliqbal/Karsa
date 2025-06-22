import express from "express";
import {
  createProfile,
  deleteProfile,
  getProfile,
  updateProfile,
} from "../controllers/profile.controller.js";
import validate from "../middlewares/validate.js";
import { profileSchema } from "../schemas/profile.shema.js";
import { authorization } from "../middlewares/authorization.js";
import { upload } from "../middlewares/upload.js";

const route = express.Router();

route.post(
  "/",
  authorization,
  upload.single("photoUrl"),
  validate(profileSchema),
  createProfile
);
route.get("/", authorization, getProfile);
route.put(
  "/:id",
  authorization,
  upload.single("photoUrl"),
  validate(profileSchema),
  updateProfile
);
route.delete("/:id", authorization, deleteProfile);

export const profileRoute = route;
