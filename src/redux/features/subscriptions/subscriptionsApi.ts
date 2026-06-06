import { baseApi } from "@/redux/api/baseApi";
import type {
  SubscriptionsResponse,
  SubscriptionsQueryParams,
} from "@/types/subscriptions";

export const subscriptionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminSubscriptions: builder.query<
      SubscriptionsResponse,
      SubscriptionsQueryParams
    >({
      query: (params = {}) => {
        const sp = new URLSearchParams();
        if (params.search) sp.set("search", params.search);
        if (params.status && params.status !== "all")
          sp.set("status", params.status);
        if (params.plan && params.plan !== "all") sp.set("plan", params.plan);
        if (params.billing_cycle && params.billing_cycle !== "all")
          sp.set("billing_cycle", params.billing_cycle);
        if (params.page) sp.set("page", String(params.page));
        if (params.page_size) sp.set("page_size", String(params.page_size));
        if (params.days) sp.set("days", String(params.days));

        const qs = sp.toString();
        return {
          url: `/admin/subscriptions/${qs ? `?${qs}` : ""}`,
          method: "GET",
        };
      },
      providesTags: ["Subscriptions"],
    }),
  }),
});

export const { useGetAdminSubscriptionsQuery } = subscriptionsApi;
