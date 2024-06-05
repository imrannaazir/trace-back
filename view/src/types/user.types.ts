import { TProfileProps } from "./profile.types";

export type TUserProps = {
  id: string;
  role: string;
  email: string;
  profile?: TProfileProps;
  createdAt: string;
  updatedAt: string;
};
