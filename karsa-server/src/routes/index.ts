import { Router } from "express";
import { authRoute } from "./auth.route";

const routes = Router()

routes.use('/auth', authRoute)

export default routes