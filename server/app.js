import express from "express";
import { API, PORT } from "./config/env.js";

import clientRouter from "./routes/client.routes.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import chartRouter from "./routes/charts.route.js";
import connectToDB from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(`${API}/auth`, authRouter);
app.use(`${API}/clients`, clientRouter);
app.use(`${API}/users`, userRouter);
app.use(`${API}/charts`, chartRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`App Running on Port ${PORT}`);

  await connectToDB();
});

export default app;
