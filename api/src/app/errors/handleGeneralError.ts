import { StatusCodes } from "http-status-codes";
import { TGenericErrorResponse } from "../types/error.types";

const handleGeneralError = (error: Error): TGenericErrorResponse => {
  return {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "General Error",
    errorDetails: error.message,
  };
};

export default handleGeneralError;
