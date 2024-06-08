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

export const updateLostItemValidationSchema = z.object({
  body: z.object({
    categoryId: z.string().optional(),
    lostItemName: z.string().optional(),
    description: z.string().optional(),
    phoneNumber: z.string().optional(),
    emailAddress: z.string().email().optional(),
    location: z.string().optional(),
    lostDate: z.coerce.date().optional(),
    photo: z.string().optional(),
    isFound: z.boolean().optional(),
  }),
});
