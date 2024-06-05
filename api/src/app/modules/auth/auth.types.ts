import { Role } from "@prisma/client";

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginReturn = {
  id: string;
  role: Role;
  email: string;
  token: string;
};
