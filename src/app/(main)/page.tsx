"use client";

import { useState } from "react";
import { AlertCircle, Calendar } from "lucide-react";

import { useGetDashboardOverviewQuery } from "@/redux/features/dashboard/dashboardApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";

import OverviewStats from "@/components/overview/OverviewStats";
import MonthlyRevenueChart from "@/components/overview/MonthlyRevenueChart";
import PlanDistributionChart from "@/components/overview/PlanDistributionChart";
import RecentActivityList from "@/components/overview/RecentActivityList";
import RecentSignupsTable from "@/components/overview/RecentSignupsTable";

import {
  OverviewStatsSkeleton,
  MonthlyRevenueChartSkeleton,
  PlanDistributionChartSkeleton,
  RecentSignupsTableSkeleton,
  RecentActivityListSkeleton,
} from "@/components/overview/DashboardSkeletons";

// ── Period options ─────────────────────────────────────────────────────────────
const PERIOD_OPTIONS = [
  { label: "7 days", days: 7 },
  { label: "30 days", days: 30 },
  { label: "90 days", days: 90 },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [days, setDays] = useState(7);
  const token = useAppSelector(selectCurrentToken);

  // Skip the query until the token is present in the store.
  // This prevents a 401 on hard-reload while the store is being hydrated.
  const { data, isLoading, isFetching, isError, refetch } =
    useGetDashboardOverviewQuery(days, { skip: !token });

  const overview = data?.data;
  // Show skeletons while fetching OR while waiting for the token
  const loading = !token || isLoading || isFetching;

  return (
    <div className="space-y-6">
      {/* ── Header row ── */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-zinc-900">
            Dashboard Overview
          </h1>
          {overview && (
            <p className="mt-0.5 text-sm text-zinc-500">
              Showing data for the last{" "}
              <span className="font-semibold text-amber-700">
                {overview.period.label}
              </span>
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Period selector */}
          <div className="flex items-center gap-1 rounded-xl border border-zinc-200 bg-white p-1 shadow-sm">
            <Calendar className="ml-1.5 h-3.5 w-3.5 text-zinc-400" />
            {PERIOD_OPTIONS.map((opt) => (
              <button
                key={opt.days}
                onClick={() => setDays(opt.days)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  days === opt.days
                    ? "bg-amber-600 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Error state ── */}
      {isError && !loading && (
        <div className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>
            Failed to load dashboard data.{" "}
            <button
              onClick={() => refetch()}
              className="font-semibold underline underline-offset-2"
            >
              Try again
            </button>
          </span>
        </div>
      )}

      {/* ── Stats ── */}
      {loading ? (
        <OverviewStatsSkeleton />
      ) : (
        overview && <OverviewStats stats={overview.stats} />
      )}

      {/* ── Charts row ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        {loading ? (
          <>
            <MonthlyRevenueChartSkeleton />
            <PlanDistributionChartSkeleton />
          </>
        ) : (
          overview && (
            <>
              <MonthlyRevenueChart data={overview.monthly_revenue_chart} />
              <PlanDistributionChart data={overview.subscribers_by_plan} />
            </>
          )
        )}
      </div>

      {/* ── Bottom row ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        {loading ? (
          <>
            <RecentSignupsTableSkeleton />
            <RecentActivityListSkeleton />
          </>
        ) : (
          overview && (
            <>
              <RecentSignupsTable />
              <RecentActivityList />
            </>
          )
        )}
      </div>
    </div>
  );
}
