import { z } from "zod";

// register validation schema
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

// login validation schema
export const loginValidationSchema = z.object({
  email: z.string().nonempty("Email is required.").email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// change password validation schema
export const changePasswordValidationSchema = z.object({
  current_password: z.string().nonempty("Current password is required"),
  new_password: z
    .string()
    .nonempty("New password is required")
    .min(6, { message: "Password must be at least 6 characters" }),
  confirm_password: z
    .string()
    .nonempty("Confirm password is required")
    .min(6, { message: "Password must be at least 6 characters" }),
});
