import { baseApi } from "@/redux/api/baseApi";
import type {
  DashboardOverviewResponse,
} from "@/types/dashboard";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardOverview: builder.query<DashboardOverviewResponse, number>({
      query: (days = 7) => ({
        url: `/admin/dashboard/overview/?days=${days}`,
        method: "GET",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardOverviewQuery } = dashboardApi;
