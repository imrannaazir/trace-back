import { z } from "zod";

export const createFoundItemValidationSchema = z.object({
  body: z.object({
    categoryId: z.string(),
    foundItemName: z.string(),
    description: z.string(),
    location: z.string(),
    phoneNumber: z.string(),
    emailAddress: z.string().email(),
    foundDate: z.coerce.date(),
    photo: z.string().optional(),
  }),
});
