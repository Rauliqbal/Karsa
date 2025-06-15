import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./src/router/index.js";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome! to my server👋",
  });
});

app.use("/api", router);

// PORT
const port = 3000;
app.listen(port, async () =>
  console.log(`⦗INFO🔥⦘ Server running on http://localhost:${port}`)
);
