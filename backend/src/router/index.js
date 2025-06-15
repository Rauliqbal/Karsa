// Read more visit https://expressjs.com/en/guide/routing.html

import express from "express";
import { getUser } from "../controllers/userController.js";


const router = express.Router();

// Route Auth

router.get('/user', getUser)

export default router;
