import { z } from "zod";

export const addFoundItemValidationSchema = z.object({
  categoryId: z.string().nonempty("Category is required."),
  itemName: z.string().nonempty("Item name is required."),
  description: z.string().optional(),
  phoneNumber: z.string().nonempty("Phone number is required"),
  emailAddress: z.string().email(),
  foundLocation: z.string().nonempty("Location is required."),
  foundDate: z.date(),
  photo: z.unknown().optional(),
});
