"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

import { useGetAdminUsersQuery } from "@/redux/features/users/usersApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";

import UsersFilters, {
  type FiltersState,
} from "@/components/users/UsersFilters";
import UsersSummary from "@/components/users/UsersSummary";
import UsersTable from "@/components/users/UsersTable";
import {
  UsersSummarySkeleton,
  UsersFiltersSkeleton,
  UsersTableSkeleton,
} from "@/components/users/UsersSkeletons";

// ── Page ──────────────────────────────────────────────────────────────────────
export default function UsersPage() {
  const token = useAppSelector(selectCurrentToken);

  const [filters, setFilters] = useState<FiltersState>({
    search: "",
    plan: "all",
    status: "all",
  });
  const [page, setPage] = useState(1);

  // Reset to page 1 whenever filters change
  function handleFiltersChange(next: FiltersState) {
    setFilters(next);
    setPage(1);
  }

  const { data, isLoading, isFetching, isError, refetch } =
    useGetAdminUsersQuery(
      {
        search: filters.search || undefined,
        plan: filters.plan !== "all" ? filters.plan : undefined,
        status: filters.status !== "all" ? filters.status : undefined,
        page,
        page_size: 10,
      },
      { skip: !token },
    );

  const loading = !token || isLoading || isFetching;
  const usersData = data?.data;

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div>
        <h1 className="text-xl font-bold text-zinc-900">Users</h1>
        <p className="mt-0.5 text-sm text-zinc-500">
          Manage and monitor all registered users.
        </p>
      </div>

      {/* ── Error state ── */}
      {isError && !loading && (
        <div className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>
            Failed to load users.{" "}
            <button
              onClick={() => refetch()}
              className="font-semibold underline underline-offset-2"
            >
              Try again
            </button>
          </span>
        </div>
      )}

      {/* ── Summary bar ── */}
      {loading ? (
        <UsersSummarySkeleton />
      ) : (
        usersData && <UsersSummary summary={usersData.summary} />
      )}

      {/* ── Filters ── */}
      {loading ? (
        <UsersFiltersSkeleton />
      ) : (
        <UsersFilters filters={filters} onChange={handleFiltersChange} />
      )}

      {/* ── Table ── */}
      {loading ? (
        <UsersTableSkeleton />
      ) : (
        usersData && (
          <UsersTable
            users={usersData.results}
            summary={usersData.summary}
            onPageChange={setPage}
          />
        )
      )}
    </div>
  );
}
