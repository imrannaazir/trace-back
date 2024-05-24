export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginReturn = {
  id: string;
  name: string;
  email: string;
  token: string;
};
