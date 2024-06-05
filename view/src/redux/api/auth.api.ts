import { BiUnderline } from "react-icons/bi";
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

    //change password
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "PUT",
        data: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useChangePasswordMutation,
} = authApi;
