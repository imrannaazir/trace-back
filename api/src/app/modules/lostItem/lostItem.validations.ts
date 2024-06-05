import { z } from "zod";

export const createLostItemValidationSchema = z.object({
  body: z.object({
    categoryId: z.string(),
    lostItemName: z.string(),
    description: z.string().optional(),
    phoneNumber: z.string(),
    emailAddress: z.string().email(),
    location: z.string(),
    lostDate: z.coerce.date(),
    photo: z.string().optional(),
    isFound: z.boolean().optional(),
  }),
});
