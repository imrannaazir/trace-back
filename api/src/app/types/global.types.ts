import { Router } from "express";

export type TModuleRoute = {
  path: string;
  route: Router;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TSendResponseParams<T> = {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
  meta?: TMeta;
};
