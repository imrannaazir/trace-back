import { FoundItem, Prisma } from "@prisma/client";
import prisma from "../../config/database";
import { TMeta } from "../../types/global.types";
import calculatePagination from "../../utils/calculatePagination";
import { foundItemsSearchableFields } from "./foundItem.constant";

// create found item
const createFoundItem = async (
  payload: FoundItem,
  userId: string,
): Promise<FoundItem> => {
  payload.userId = userId;

  // check is category id valid
  await prisma.foundItemCategory.findUniqueOrThrow({
    where: {
      id: payload.categoryId,
    },
  });

  const result = await prisma.foundItem.create({
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

// get all found item
const getAllFoundItems = async (
  filters: Record<string, unknown>,
  options: Record<string, unknown>,
): Promise<{ result: FoundItem[]; meta: TMeta }> => {
  const { take, page, skip, sortBy, sortOrder } = calculatePagination(options);

  const { searchTerm, ...filterData } = filters;

  const andConditions: Prisma.FoundItemWhereInput[] = [];
  // check if search term found implement searching
  if (searchTerm) {
    andConditions.push({
      OR: foundItemsSearchableFields.map((field) => ({
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
  const whereConditions: Prisma.FoundItemWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.foundItem.findMany({
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

  const total = await prisma.foundItem.count({
    where: whereConditions,
  });
  const meta: TMeta = {
    limit: take,
    page,
    total,
  };
  return { result, meta };
};

// get all my found items
const getAllMyFoundItems = async (userId: string): Promise<FoundItem[]> => {
  const result = await prisma.foundItem.findMany({
    where: {
      userId,
    },
  });

  return result;
};

const FoundItemServices = {
  createFoundItem,
  getAllFoundItems,
  getAllMyFoundItems,
};

export default FoundItemServices;
