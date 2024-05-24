import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { StatusCodes } from "http-status-codes";
import { verifyToken } from "../modules/auth/auth.utils";
import { JwtPayload, Secret } from "jsonwebtoken";
import config from "../config";
import prisma from "../config/database";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Token not sent.");
      }

      // verify token
      const verifiedUser = verifyToken(
        token,
        config.jwt.secret as Secret,
      ) as JwtPayload;
      if (!verifiedUser) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid token.");
      }

      // check if user exist
      await prisma.user.findUniqueOrThrow({
        where: {
          id: verifiedUser?.id,
        },
      });

      req.user = verifiedUser;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
