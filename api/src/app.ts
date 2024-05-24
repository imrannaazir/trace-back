import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFoundErrorHandler from "./app/middlewares/notFoundErrorHandler";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// test route
app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Hello world",
  });
});

// application routes
app.use("/api", router);

// global error handler middleware
app.use(globalErrorHandler);

// handle not found error
app.use(notFoundErrorHandler);

export default app;
