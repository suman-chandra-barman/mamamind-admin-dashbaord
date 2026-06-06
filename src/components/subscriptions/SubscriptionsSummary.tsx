"use client";

import { CreditCard, RefreshCw, UserCheck } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SubscriptionsStats } from "@/types/subscriptions";

interface Props {
  stats: SubscriptionsStats;
}

export default function SubscriptionsSummary({ stats }: Props) {
  const items = [
    {
      label: "Active Subscriptions",
      value: stats.active_subscriptions.value,
      change:
        stats.active_subscriptions.change_percent != null
          ? `${Number(stats.active_subscriptions.change_percent) >= 0 ? "+" : ""}${stats.active_subscriptions.change_percent}%`
          : null,
      note: stats.active_subscriptions.change_label,
      icon: UserCheck,
      tone: "bg-amber-100 text-amber-700",
      changeTone:
        stats.active_subscriptions.new_this_period != null &&
        stats.active_subscriptions.new_this_period >= 0
          ? "bg-emerald-100 text-emerald-700"
          : "bg-rose-100 text-rose-600",
    },
    {
      label: "Cancelled This Month",
      value: stats.cancelled_this_month.value,
      change:
        stats.cancelled_this_month.change_percent != null
          ? `${Number(stats.cancelled_this_month.change_percent) >= 0 ? "+" : ""}${stats.cancelled_this_month.change_percent}%`
          : null,
      note: stats.cancelled_this_month.change_label,
      icon: CreditCard,
      tone: "bg-amber-100 text-amber-700",
      changeTone:
        Number(stats.cancelled_this_month.change_percent ?? 0) <= 0
          ? "bg-emerald-100 text-emerald-700"
          : "bg-rose-100 text-rose-600",
    },
    {
      label: "Upcoming Renewals (7d)",
      value: stats.upcoming_renewals_7d.value,
      change:
        stats.upcoming_renewals_7d.change_percent != null
          ? `${Number(stats.upcoming_renewals_7d.change_percent) >= 0 ? "+" : ""}${stats.upcoming_renewals_7d.change_percent}%`
          : null,
      note: stats.upcoming_renewals_7d.change_label,
      icon: RefreshCw,
      tone: "bg-amber-100 text-amber-700",
      changeTone: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.label} className="flex flex-col gap-4 p-5">
          <div className="flex items-start justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
              {item.label}
            </p>
            <div className={cn("rounded-lg p-2", item.tone)}>
              <item.icon className="h-4 w-4" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold text-zinc-900">
              {item.value.toLocaleString()}
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
              {item.change != null ? (
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 font-semibold",
                    item.changeTone,
                  )}
                >
                  {item.change}
                </span>
              ) : null}
              {item.note}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
