import { z } from "zod";

export const addFoundItemValidationSchema = z.object({
  categoryId: z.string().nonempty("Category is required."),
  foundItemName: z.string().nonempty("Item name is required."),
  description: z.string().optional(),
  phoneNumber: z.string().nonempty("Phone number is required"),
  emailAddress: z.string().email(),
  location: z.string().nonempty("Location is required."),
  foundDate: z.date(),
  photo: z.string().optional(),
});
export const addLostItemValidationSchema = z.object({
  categoryId: z.string().nonempty("Category is required."),
  lostItemName: z.string().nonempty("Item name is required."),
  description: z.string().optional(),
  phoneNumber: z.string().nonempty("Phone number is required"),
  emailAddress: z.string().email(),
  location: z.string().nonempty("Location is required."),
  lostDate: z.date(),
  photo: z.string().optional(),
  isFound: z.boolean(),
});
