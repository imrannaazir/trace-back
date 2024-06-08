import { baseApi } from "./baseApi";

const lostItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all lost items
    getAllLostItem: builder.query({
      query: (params: string) => ({
        url: `/lost-items?${params}`,
        method: "GET",
      }),
    }),
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

    // get  single lost item
    getSingleLostItem: builder.query({
      query: (id) => ({
        url: `/lost-items/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateLostItemMutation,
  useGetAllMyLostItemsQuery,
  useGetSingleLostItemQuery,
  useGetAllLostItemQuery,
} = lostItemApi;
