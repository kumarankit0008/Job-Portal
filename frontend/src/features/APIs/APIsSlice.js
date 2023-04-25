import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const APIsSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://job-portal-backend-flax.vercel.app/",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.auth?.accessToken;
      // console.log(token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
