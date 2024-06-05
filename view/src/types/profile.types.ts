import { TUser } from "@/redux/features/auth.slice";
import { TUserProps } from "./user.types";

export type TProfileProps = {
  id: string;
  name: string;
  phoneNumber: string | null;
  address: string | null;
  age: number | null;
  bio: string | null;
  photo: string | null;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: TUserProps;
};
