import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get profile
    getProfile: builder.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
    }),

    // update profile
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/my-profile",
        method: "PUT",
        data: data,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
