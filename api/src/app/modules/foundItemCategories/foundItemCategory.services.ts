import { FoundItemCategory } from "@prisma/client";
import prisma from "../../config/database";

// create found item category
const createFoundItemCategory = async (
  payload: FoundItemCategory,
): Promise<FoundItemCategory> => {
  const result = await prisma.foundItemCategory.create({
    data: {
      name: payload.name,
    },
  });

  return result;
};

const FoundItemCategoryServices = { createFoundItemCategory };
export default FoundItemCategoryServices;
