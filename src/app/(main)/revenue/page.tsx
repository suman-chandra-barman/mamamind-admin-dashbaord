"use client";

import { AlertCircle } from "lucide-react";

import { useGetAdminRevenueQuery } from "@/redux/features/revenue/revenueApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";

import RevenueStats from "@/components/revenue/RevenueStats";
import RevenueChart from "@/components/revenue/RevenueChart";
import PlanRevenueBreakdown from "@/components/revenue/PlanRevenueBreakdown";
import RevenueByMonthTable from "@/components/revenue/RevenueByMonthTable";
import {
  RevenueStatsSkeleton,
  RevenueChartSkeleton,
  PlanRevenueBreakdownSkeleton,
  RevenueByMonthTableSkeleton,
} from "@/components/revenue/RevenueSkeletons";

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RevenuePage() {
  const token = useAppSelector(selectCurrentToken);

  const { data, isLoading, isFetching, isError, refetch } =
    useGetAdminRevenueQuery(undefined, { skip: !token });

  const loading = !token || isLoading || isFetching;
  const revenue = data?.data;

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div>
        <h1 className="text-xl font-bold text-zinc-900">Revenue</h1>
        <p className="mt-0.5 text-sm text-zinc-500">
          Track MRR, ARR, and subscription revenue trends.
        </p>
      </div>

      {/* ── Error state ── */}
      {isError && !loading && (
        <div className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>
            Failed to load revenue data.{" "}
            <button
              onClick={() => refetch()}
              className="font-semibold underline underline-offset-2"
            >
              Try again
            </button>
          </span>
        </div>
      )}

      {/* ── Stat cards ── */}
      {loading ? <RevenueStatsSkeleton /> : revenue && <RevenueStats data={revenue} />}

      {/* ── Bar chart ── */}
      {loading ? (
        <RevenueChartSkeleton />
      ) : (
        revenue && <RevenueChart data={revenue.revenue_over_time} />
      )}

      {/* ── Bottom 2-col grid ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        {loading ? (
          <>
            <PlanRevenueBreakdownSkeleton />
            <RevenueByMonthTableSkeleton />
          </>
        ) : (
          revenue && (
            <>
              <PlanRevenueBreakdown data={revenue.plan_breakdown} />
              <RevenueByMonthTable data={revenue.revenue_by_month} />
            </>
          )
        )}
      </div>
    </div>
  );
}
