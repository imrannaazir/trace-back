import baseApi from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get category list
    getCategoryList: builder.query({
      query: () => ({
        url: "/found-item-categories/get-all",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryListQuery } = categoryApi;
