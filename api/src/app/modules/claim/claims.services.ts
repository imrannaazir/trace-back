import { Claim } from "@prisma/client";
import prisma from "../../config/database";

// create claim
const createClaim = async (payload: Claim, userId: string): Promise<Claim> => {
  // check is found item id is valid
  await prisma.foundItem.findUniqueOrThrow({
    where: {
      id: payload.foundItemId,
    },
  });

  payload.userId = userId;
  const result = await prisma.claim.create({
    data: payload,
  });

  return result;
};

// get all claims
const getAllClaims = async (): Promise<Claim[]> => {
  const result = await prisma.claim.findMany({
    include: {
      foundItem: {
        include: {
          category: true,
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
      },
    },
  });

  return result;
};

// get single claim
const getSingleClaim = async (claimId: string): Promise<Claim> => {
  const result = await prisma.claim.findUniqueOrThrow({
    where: {
      id: claimId,
    },
    include: {
      foundItem: {
        include: {
          category: true,
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
      },
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

// get my all claims
const getMyAllClaims = async (userId: string): Promise<Claim[]> => {
  const myClaims = await prisma.claim.findMany({
    where: {
      userId,
    },
    include: {
      foundItem: true,
    },
  });

  return myClaims;
};

// update claim status
const updateClaimStatus = async (
  payload: Claim,
  claimId: string,
): Promise<Claim> => {
  // check is claim founded
  await prisma.claim.findUniqueOrThrow({
    where: {
      id: claimId,
    },
  });

  const result = await prisma.claim.update({
    where: {
      id: claimId,
    },
    data: payload,
  });

  return result;
};

const ClaimServices = {
  createClaim,
  getAllClaims,
  updateClaimStatus,
  getMyAllClaims,
  getSingleClaim,
};

export default ClaimServices;
