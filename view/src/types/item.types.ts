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

export type TFoundItemProps = {
  id: string;
  userId: string;
  categoryId: string;
  foundItemName: string;
  description: string;
  location: string;
  photo: string;
  phoneNumber: string;
  foundDate: string;
  emailAddress: string;
  createdAt: string;
  updatedAt: string;
};
