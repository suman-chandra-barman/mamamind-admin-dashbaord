import { baseApi } from "@/redux/api/baseApi";
import type { RevenueResponse } from "@/types/revenue";

export const revenueApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminRevenue: builder.query<RevenueResponse, void>({
      query: () => ({
        url: "/admin/revenue/",
        method: "GET",
      }),
      providesTags: ["Revenue"],
    }),
  }),
});

export const { useGetAdminRevenueQuery } = revenueApi;
