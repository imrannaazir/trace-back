import { z } from "zod";

export const updateProfileValidationSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  age: z.coerce.number().optional(),
  bio: z.string().optional(),
  photo: z.string().optional(),
});
