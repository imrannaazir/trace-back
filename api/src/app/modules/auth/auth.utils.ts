import bcrypt from "bcrypt";
import config from "../../config";
import AppError from "../../errors/AppError";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

// hash password
export const hashPassword = async (password: string) => {
  try {
    return await bcrypt.hash(password, Number(config.salt_round));
  } catch (error) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Failed to hash password.");
  }
};

// compare password
export const comparePassword = async (
  hashedPassword: string,
  plainPassword: string,
) => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Failed to compare password.");
  }
};

// create token
export const createToken = (
  payload: JwtPayload,
  secret: Secret,
  expiresIn: string,
) => {
  return jwt.sign(payload, secret, {
    expiresIn,
  });
};

// verify token
export const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret);
};
