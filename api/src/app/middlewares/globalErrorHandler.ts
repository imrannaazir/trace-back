/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import { TErrorDetails } from "../types/error.types";
import handleZodError from "../errors/handleZodError";
import { Prisma } from "@prisma/client";
import handleKnownRequestError from "../errors/handleKnownRequestError";
import handlePrismaValidationError from "../errors/handlePrismaValidationError";
import AppError from "../errors/AppError";
import handleAppError from "../errors/handleAppError";
import handleGeneralError from "../errors/handleGeneralError";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error);

  let message = "Something went wrong!";
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let errorDetails: TErrorDetails = "Something went wrong.";

  // handle zod error
  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    message = simplifiedError.message;
    statusCode = simplifiedError.statusCode;
    errorDetails = simplifiedError.errorDetails;
  }
  // handle prisma validation error
  else if (error instanceof Prisma.PrismaClientValidationError) {
    const simplifiedError = handlePrismaValidationError(error);
    message = simplifiedError.message;
    statusCode = simplifiedError.statusCode;
    errorDetails = simplifiedError.errorDetails;
  }

  // handle client known error
  else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const simplifiedError = handleKnownRequestError(error);
    message = simplifiedError.message;
    statusCode = simplifiedError.statusCode;
    errorDetails = simplifiedError.errorDetails;
  }

  //handle App Error
  else if (error instanceof AppError) {
    const simplifiedError = handleAppError(error);
    message = simplifiedError.message;
    statusCode = simplifiedError.statusCode;
    errorDetails = simplifiedError.errorDetails;
  }

  // handle general error
  else if (error instanceof Error) {
    const simplifiedError = handleGeneralError(error);
    message = simplifiedError.message;
    statusCode = simplifiedError.statusCode;
    errorDetails = simplifiedError.errorDetails;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorDetails,
  });
};

export default globalErrorHandler;
