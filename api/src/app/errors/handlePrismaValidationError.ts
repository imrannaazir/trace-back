import { Prisma } from "@prisma/client";
import { TErrorDetails, TGenericErrorResponse } from "../types/error.types";
import config from "../config";
import { StatusCodes } from "http-status-codes";

const handlePrismaValidationError = (
  error: Prisma.PrismaClientValidationError,
): TGenericErrorResponse => {
  const errorMessageArr = error.message.split(`\n`);
  const errorDetailsMessage = errorMessageArr[errorMessageArr.length - 1];
  const regexPattern = /`([^`]+)`/;
  const path = errorDetailsMessage.match(regexPattern);
  const statusCode = StatusCodes.BAD_REQUEST;
  const message = `${
    config.NODE_ENV === "development" ? "Prisma " : ""
  }Validation error.`;
  const errorDetails: TErrorDetails = {
    issues: [
      {
        message: errorDetailsMessage,
        path: `${path?.[1]}`,
      },
    ],
  };
  return {
    message,
    errorDetails,
    statusCode,
  };
};

export default handlePrismaValidationError;
