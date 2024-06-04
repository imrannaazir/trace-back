import baseApi from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // register
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        data: data,
      }),
    }),

    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
