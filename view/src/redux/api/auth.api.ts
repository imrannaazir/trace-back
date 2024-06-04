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
  }),
});

export const { useRegisterMutation } = authApi;
