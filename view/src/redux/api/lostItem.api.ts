import baseApi from "./baseApi";

const lostItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create lost item
    createLostItem: builder.mutation({
      query: (data) => ({
        url: "/lost-items",
        method: "POST",
        data: data,
      }),
    }),

    // get all my lost items
    getAllMyLostItems: builder.query({
      query: () => ({
        url: "/lost-items/my",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateLostItemMutation, useGetAllMyLostItemsQuery } =
  lostItemApi;
