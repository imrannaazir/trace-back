import { z } from "zod";

export const createFoundItemCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});
