import { TCategoryProps } from "./category.types";
import { TUserProps } from "./user.types";

export type TLostItemProps = {
  id: string;
  userId: string;
  categoryId: string;
  lostItemName: string;
  description: string;
  location: string;
  photo: string;
  phoneNumber: string;
  lostDate: string;
  emailAddress: string;
  isFound: boolean;
  createdAt: string;
  updatedAt: string;
  category: TCategoryProps;
  user: TUserProps;
};
