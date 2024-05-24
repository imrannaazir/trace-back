import { z } from "zod";

export const createFoundItemValidationSchema = z.object({
  body: z.object({
    categoryId: z.string(),
    foundItemName: z.string(),
    description: z.string(),
    location: z.string(),
  }),
});
