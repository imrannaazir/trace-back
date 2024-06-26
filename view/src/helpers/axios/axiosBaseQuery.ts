import { logOut } from "@/redux/features/auth.slice";
import { store } from "@/redux/store";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    const authValue = localStorage.getItem("persist:auth");
    let accessToken;
    if (authValue) {
      accessToken = JSON.parse(authValue).accessToken;
      accessToken = accessToken.replace(/"/g, "");
    }

    if (accessToken) {
      headers = {
        ...headers,
        Authorization: accessToken,
      };
    }
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      if (err?.response?.status === 401) {
        store.dispatch(logOut());
      }
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
