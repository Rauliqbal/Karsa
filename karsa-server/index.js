import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import route from "./src/routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARE
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/v1", route);

// START SERVER
app.listen(port, () =>
  console.log("[🔥INFO]: Server is running on http://localhost:%s", port)
);
