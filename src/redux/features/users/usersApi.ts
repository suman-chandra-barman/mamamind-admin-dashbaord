import { baseApi } from "@/redux/api/baseApi";
import type { UsersResponse, UsersQueryParams } from "@/types/users";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminUsers: builder.query<UsersResponse, UsersQueryParams>({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();
        if (params.search) searchParams.set("search", params.search);
        if (params.plan && params.plan !== "all")
          searchParams.set("plan", params.plan);
        if (params.status && params.status !== "all")
          searchParams.set("status", params.status);
        if (params.page) searchParams.set("page", String(params.page));
        if (params.page_size)
          searchParams.set("page_size", String(params.page_size));

        const qs = searchParams.toString();
        return {
          url: `/admin/users/${qs ? `?${qs}` : ""}`,
          method: "GET",
        };
      },
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAdminUsersQuery } = usersApi;
