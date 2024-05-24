import { TGenericErrorResponse } from "../types/error.types";
import AppError from "./AppError";

const handleAppError = (error: AppError): TGenericErrorResponse => {
  return {
    statusCode: error.statusCode,
    message: "App Error.",
    errorDetails: error.message,
  };
};
export default handleAppError;
