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
  }),
});

export const { useCreateLostItemMutation } = lostItemApi;
