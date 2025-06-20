import { Router } from "express";
import { authRoute } from "./auth.route";
import { profileRoute } from "./profile.route";

const routes = Router();

routes.use("/auth", authRoute);
routes.use("/profile", profileRoute);

export default routes;
