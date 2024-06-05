import { LostItem, Prisma } from "@prisma/client";
import prisma from "../../config/database";
import { TMeta } from "../../types/global.types";
import calculatePagination from "../../utils/calculatePagination";
import { lostItemsSearchableFields } from "./lostItem.constant";

// create lost item
const createLostItem = async (
  payload: LostItem,
  userId: string,
): Promise<LostItem> => {
  payload.userId = userId;

  // check is category id valid
  await prisma.foundItemCategory.findUniqueOrThrow({
    where: {
      id: payload.categoryId,
    },
  });

  const result = await prisma.lostItem.create({
    data: payload,
    include: {
      category: true,
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return result;
};

// get all lost item
const getAllLostItems = async (
  filters: Record<string, unknown>,
  options: Record<string, unknown>,
): Promise<{ result: LostItem[]; meta: TMeta }> => {
  const { take, page, skip, sortBy, sortOrder } = calculatePagination(options);

  const { searchTerm, ...filterData } = filters;

  const andConditions: Prisma.LostItemWhereInput[] = [];
  // check if search term found implement searching
  if (searchTerm) {
    andConditions.push({
      OR: lostItemsSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // check is filter data found , implement filtering
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }

  // put all conditions in one variable
  const whereConditions: Prisma.LostItemWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.lostItem.findMany({
    where: whereConditions,
    take,
    skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
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
  });

  const total = await prisma.lostItem.count({
    where: whereConditions,
  });
  const meta: TMeta = {
    limit: take,
    page,
    total,
  };
  return { result, meta };
};

// get all my lost item
const getAllMyLostItems = async (userId: string): Promise<LostItem[]> => {
  const result = await prisma.lostItem.findMany({
    where: {
      userId,
    },
  });

  return result;
};

const LostItemServices = {
  createLostItem,
  getAllLostItems,
  getAllMyLostItems,
};

export default LostItemServices;
