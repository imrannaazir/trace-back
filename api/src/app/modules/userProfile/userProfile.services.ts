import { UserProfile } from "@prisma/client";
import prisma from "../../config/database";

// get my profile
const getMyProfile = async (myId: string): Promise<UserProfile | null> => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id: myId,
    },
  });

  const result = await prisma.userProfile.findUnique({
    where: {
      userId: myId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return result;
};

// update my profile
const updateMyProfile = async (
  payload: UserProfile,
  myId: string,
): Promise<UserProfile> => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id: myId,
    },
  });

  const result = await prisma.userProfile.update({
    where: {
      userId: myId,
    },
    data: payload,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return result;
};

const UserProfileServices = {
  getMyProfile,
  updateMyProfile,
};

export default UserProfileServices;
