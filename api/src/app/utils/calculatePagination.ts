import config from "../config";

type TOptions = {
  page?: number;
  limit?: number;
  sortOrder?: string;
  sortBy?: string;
};

type TOptionsResult = {
  page: number;
  take: number;
  skip: number;
  sortBy: string;
  sortOrder: string;
};

const calculatePagination = (options: TOptions): TOptionsResult => {
  const page: number = Number(options.page) || Number(config.page);
  const take: number = Number(options.limit) || Number(config.limit);
  const skip: number = (Number(page) - 1) * take;

  const sortBy: string = options.sortBy || "createdAt";
  const sortOrder: string = options.sortOrder || "desc";

  return {
    page,
    take,
    skip,
    sortBy,
    sortOrder,
  };
};

export default calculatePagination;
