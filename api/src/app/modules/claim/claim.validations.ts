import { Status } from "@prisma/client";
import { z } from "zod";

export const createClaimValidationSchema = z.object({
  body: z.object({
    foundItemId: z.string(),
    distinguishingFeatures: z.string(),
    lostDate: z.string(),
    photo: z.string().optional(),
  }),
});

export const updateClaimStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum(Object.keys(Status) as [string, ...string[]]),
  }),
});
