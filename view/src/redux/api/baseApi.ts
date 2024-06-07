import axiosBaseQuery from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "./tabTypeList";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
