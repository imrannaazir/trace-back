import { Prisma } from "@prisma/client";
import { TErrorDetails, TGenericErrorResponse } from "../types/error.types";
import { StatusCodes } from "http-status-codes";

const handleKnownRequestError = (
  error: Prisma.PrismaClientKnownRequestError,
): TGenericErrorResponse => {
  let statusCode = StatusCodes.BAD_REQUEST;
  let message: string = "Client known request error.";
  let errorDetails: TErrorDetails = "Some thing went wrong.";

  // handle unique constraint error
  if (error.code === "P2002" && error.meta && error.meta.target !== undefined) {
    const path = error.meta.target as string[];
    const model = error.meta.modelName;

    message = `Unique constraint failed on field ${path[0]}`;
    errorDetails = {
      issues: [
        {
          message: `Already exist ${model} by provided ${path[0]}`,
          path: path[0],
        },
      ],
    };
  }
  // handle null constraint error
  else if (
    error.code === "P2011" &&
    error.meta &&
    error.meta.constraint !== undefined
  ) {
    const path = error.meta.constraint as string[];
    const model = error.meta.modelName;

    message = `Null constraint violation on the ${path[0]}`;
    errorDetails = {
      issues: [
        {
          message: `${path[0]} is required for ${model} but got null.`,
          path: path[0],
        },
      ],
    };
  }

  // handle not found error
  else if (error.code === "P2025") {
    message = "Not found.";
    statusCode = StatusCodes.NOT_FOUND;
    errorDetails = error.message;
  }

  return {
    message,
    statusCode,
    errorDetails,
  };
};

export default handleKnownRequestError;
