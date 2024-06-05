import baseApi from "./baseApi";

const claimApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get my claim list
    getMyClaimList: builder.query({
      query: () => ({
        url: "/claims/my",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyClaimListQuery } = claimApi;
