import { TFoundItemProps } from "./item.types";
import { TUserProps } from "./user.types";

export type TClaimProps = {
  id: string;
  userId: string;
  foundItemId: string;
  status: "PENDING" | "FOUND" | "RESOLVED";
  distinguishingFeatures: string;
  photo: string;
  lostDate: string;
  createdAt: string;
  updatedAt: string;
  foundItem: TFoundItemProps;
  user?: TUserProps;
};
