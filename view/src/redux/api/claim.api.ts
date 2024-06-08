import { baseApi } from "./baseApi";

const claimApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //request owner ship claim
    requestOwnerShipClaim: builder.mutation({
      query: (data) => ({
        url: "/claims",
        method: "POST",
        data: data,
      }),
    }),
    // get my claim list
    getMyClaimList: builder.query({
      query: () => ({
        url: "/claims/my",
        method: "GET",
      }),
    }),
    // get my claim list of item
    getClaimListOfItem: builder.query({
      query: (foundItemId) => ({
        url: `/claims/of-item/${foundItemId}`,
        method: "GET",
      }),
    }),
    // get my claim list
    getSingleClaim: builder.query({
      query: (claimId) => ({
        url: `/claims/single/${claimId}`,
        method: "GET",
      }),
      providesTags: ["claim"],
    }),

    // change claim status
    changeClaimStatus: builder.mutation({
      query: ({ claimId, status }) => ({
        url: `/claims/${claimId}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["claim"],
    }),
  }),
});

export const {
  useGetMyClaimListQuery,
  useRequestOwnerShipClaimMutation,
  useGetSingleClaimQuery,
  useGetClaimListOfItemQuery,
  useChangeClaimStatusMutation,
} = claimApi;
