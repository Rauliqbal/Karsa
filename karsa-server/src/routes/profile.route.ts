import express from "express";
import { accessValidation } from "../middlewares/accesValidation";
import { createProfile } from "../controllers/profile.controller";
import { upload } from "../utils/multer";

const route = express.Router();

route.post("/", upload.single("photoUrl"), accessValidation, createProfile);

export const profileRoute = route;
