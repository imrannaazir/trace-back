import { Response } from "express";
import { TSendResponseParams } from "../types/global.types";

const sendResponse = <T>(res: Response, params: TSendResponseParams<T>) => {
  const { data, message, statusCode, success, meta } = params;
  res.status(201).json({
    success,
    statusCode,
    message,
    data,
    meta,
  });
};

export default sendResponse;
