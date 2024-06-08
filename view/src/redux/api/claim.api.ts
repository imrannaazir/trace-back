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
    // get my claim list
    getSingleClaim: builder.query({
      query: (claimId) => ({
        url: `/claims/single/${claimId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetMyClaimListQuery,
  useRequestOwnerShipClaimMutation,
  useGetSingleClaimQuery,
} = claimApi;
