import { z } from "zod";

export const requestOwnerShipClaimValidationSchema = z.object({
  distinguishingFeatures: z.string().nonempty("Claim description is required"),
  lostDate: z.date(),
  photo: z.string().optional(),
});
