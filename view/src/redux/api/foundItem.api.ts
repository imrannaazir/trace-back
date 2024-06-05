import baseApi from "./baseApi";

const foundItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create found item
    createFoundItem: builder.mutation({
      query: (data) => ({
        url: "/found-items",
        method: "POST",
        data: data,
      }),
    }),

    // get all my found item
    getAllMyFoundItem: builder.query({
      query: () => ({
        url: "/found-items/my",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateFoundItemMutation, useGetAllMyFoundItemQuery } =
  foundItemApi;
