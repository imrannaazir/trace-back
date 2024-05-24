import { z } from "zod";

export const updateProfileValidationSchema = z.object({
  body: z.object({
    bio: z.string().optional(),
    age: z.number().optional(),
  }),
});
