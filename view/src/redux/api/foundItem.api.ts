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
  }),
});

export const { useCreateFoundItemMutation } = foundItemApi;
