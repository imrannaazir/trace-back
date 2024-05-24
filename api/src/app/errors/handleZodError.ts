import { ZodError } from "zod";
import { TErrorSource, TGenericErrorResponse } from "../types/error.types";
import { StatusCodes } from "http-status-codes";
import config from "../config";

const handleZodError = (error: ZodError): TGenericErrorResponse => {
  const issues: TErrorSource[] = error.issues.map((issue) => {
    const path = issue.path[issue.path.length - 1];
    return {
      message: `${path} is ${issue.message}.`,
      path: `${path}`,
    };
  });

  return {
    statusCode: StatusCodes.BAD_REQUEST,
    message: `${
      config.NODE_ENV === "development" ? "Zod " : ""
    }Validation Error`,
    errorDetails: { issues },
  };
};
export default handleZodError;
