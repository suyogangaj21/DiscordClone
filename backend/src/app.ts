import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorfn from "./middlewares/error";
import UserRoute from "./Routes/UserRoute"
let app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FORNTEND_URL,
    credentials: true,
  })
);

// app.use("/api", route1, route2);
app.use('/api',UserRoute)
app.use(errorfn);



export default app;
