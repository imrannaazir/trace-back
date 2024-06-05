import { User, UserProfile } from "@prisma/client";
import prisma from "../../config/database";
import { comparePassword, createToken, hashPassword } from "./auth.utils";
import { TLoginPayload, TLoginReturn } from "./auth.types";
import AppError from "../../errors/AppError";
import { StatusCodes } from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import config from "../../config";

// register
const register = async (
  user: User,
  profile: UserProfile,
): Promise<UserProfile | string> => {
  const result = await prisma.$transaction(async (transactionClient) => {
    user.password = (await hashPassword(user.password)) as string;
    // create new user
    const newUser = await transactionClient.user.create({
      data: user,
      include: {
        profile: true,
      },
    });

    // create profile for user
    const createdProfileData = await transactionClient.userProfile.create({
      data: {
        ...profile,
        userId: newUser.id,
        name: user?.name as string,
      },
      include: {
        user: {
          select: {
            email: true,
            id: true,
          },
        },
      },
    });

    return createdProfileData;
  });

  return result;
};

// login
const login = async (payload: TLoginPayload): Promise<TLoginReturn> => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  // check is password valid
  const isPasswordMatched = await comparePassword(
    user.password,
    payload.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "Password does not matched.");
  }

  const jwt_payload: JwtPayload = {
    id: user.id,
    email: user.email,
  };

  // create access token
  const accessToken = createToken(
    jwt_payload,
    config.jwt.secret as string,
    config.jwt.expires_in as string,
  );

  const result = {
    id: user.id,
    role: user.role,
    email: user.email,
    token: accessToken,
  };

  return result;
};

const AuthServices = {
  login,
  register,
};

export default AuthServices;
