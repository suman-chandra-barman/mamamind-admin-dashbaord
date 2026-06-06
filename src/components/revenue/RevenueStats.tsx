"use client";

import { DollarSign, LineChart, TrendingUp, Wallet } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RevenueData } from "@/types/revenue";

interface Props {
  data: RevenueData;
}

export default function RevenueStats({ data }: Props) {
  const { monthly_recurring_revenue, arr_projected, avg_revenue_per_user, total_collected } = data;

  const stats = [
    {
      label: "Monthly Recurring Revenue",
      value: `$${monthly_recurring_revenue.value.toLocaleString()}`,
      change: `${Number(monthly_recurring_revenue.change_percent) >= 0 ? "+" : ""}${monthly_recurring_revenue.change_percent}%`,
      note: monthly_recurring_revenue.change_label ?? "vs last month",
      icon: DollarSign,
      positive: Number(monthly_recurring_revenue.change_percent) >= 0,
    },
    {
      label: "ARR (Projected)",
      value: `$${arr_projected.value.toLocaleString()}`,
      change: `+${arr_projected.change_percent}%`,
      note: "annualized run rate",
      icon: TrendingUp,
      positive: true,
    },
    {
      label: "Avg Revenue Per User",
      value: `$${avg_revenue_per_user.value.toFixed(2)}`,
      change: `+${avg_revenue_per_user.change_percent}`,
      note: avg_revenue_per_user.change_label ?? "per active subscriber",
      icon: LineChart,
      positive: Number(avg_revenue_per_user.change_percent) >= 0,
    },
    {
      label: "Total Collected (All Time)",
      value: `$${total_collected.value.toLocaleString()}`,
      change: `+$${total_collected.change_value}`,
      note: total_collected.change_label,
      icon: Wallet,
      positive: true,
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {stats.map((item) => (
        <Card key={item.label} className="flex flex-col gap-4 p-5">
          <div className="flex items-start justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
              {item.label}
            </p>
            <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
              <item.icon className="h-4 w-4" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold text-zinc-900">{item.value}</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 font-semibold",
                  item.positive
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-rose-100 text-rose-600",
                )}
              >
                {item.change}
              </span>
              {item.note}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
