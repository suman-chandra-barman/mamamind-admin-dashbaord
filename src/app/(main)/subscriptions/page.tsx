"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

import { useGetAdminSubscriptionsQuery } from "@/redux/features/subscriptions/subscriptionsApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";

import SubscriptionsSummary from "@/components/subscriptions/SubscriptionsSummary";
import SubscriptionsFilters, {
  type SubFiltersState,
} from "@/components/subscriptions/SubscriptionsFilters";
import SubscriptionsTable from "@/components/subscriptions/SubscriptionsTable";
import {
  SubscriptionsSummarySkeleton,
  SubscriptionsFiltersSkeleton,
  SubscriptionsTableSkeleton,
} from "@/components/subscriptions/SubscriptionsSkeletons";

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SubscriptionsPage() {
  const token = useAppSelector(selectCurrentToken);

  const [filters, setFilters] = useState<SubFiltersState>({
    search: "",
    plan: "all",
    billing_cycle: "all",
  });
  // Status driven by the tab strip
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(1);

  // Reset to page 1 on any filter / tab change
  function handleFiltersChange(next: SubFiltersState) {
    setFilters(next);
    setPage(1);
  }
  function handleTabChange(tab: string) {
    setActiveTab(tab);
    setPage(1);
  }

  const { data, isLoading, isFetching, isError, refetch } =
    useGetAdminSubscriptionsQuery(
      {
        search: filters.search || undefined,
        plan: filters.plan !== "all" ? filters.plan : undefined,
        billing_cycle:
          filters.billing_cycle !== "all" ? filters.billing_cycle : undefined,
        status: activeTab !== "all" ? activeTab : undefined,
        page,
        page_size: 10,
        days: 30,
      },
      { skip: !token },
    );

  const loading = !token || isLoading || isFetching;
  const subData = data?.data;

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div>
        <h1 className="text-xl font-bold text-zinc-900">Subscriptions</h1>
        <p className="mt-0.5 text-sm text-zinc-500">
          Monitor and manage all active subscription plans.
        </p>
      </div>

      {/* ── Error state ── */}
      {isError && !loading && (
        <div className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>
            Failed to load subscriptions.{" "}
            <button
              onClick={() => refetch()}
              className="font-semibold underline underline-offset-2"
            >
              Try again
            </button>
          </span>
        </div>
      )}

      {/* ── Stats cards ── */}
      {loading ? (
        <SubscriptionsSummarySkeleton />
      ) : (
        subData && <SubscriptionsSummary stats={subData.stats} />
      )}

      {/* ── Filters ── */}
      {loading ? (
        <SubscriptionsFiltersSkeleton />
      ) : (
        <SubscriptionsFilters filters={filters} onChange={handleFiltersChange} />
      )}

      {/* ── Table (with built-in tab strip) ── */}
      {loading ? (
        <SubscriptionsTableSkeleton />
      ) : (
        subData && (
          <SubscriptionsTable
            subscriptions={subData.results}
            summary={subData.summary}
            tabs={subData.tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onPageChange={setPage}
          />
        )
      )}
    </div>
  );
}
