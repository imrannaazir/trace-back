import { z } from "zod";

export const registerValidationSchema = z
  .object({
    firstName: z.string().nonempty("First name is required."),
    lastName: z.string().nonempty("Last name is required."),
    email: z.string().nonempty("Email is required.").email(),
    password: z
      .string({ required_error: "Password is required." })
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z
      .string({ required_error: "Confirm password is required." })
      .min(6, { message: "Password must be at least 6 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const loginValidationSchema = z.object({
  email: z.string().nonempty("Email is required.").email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
