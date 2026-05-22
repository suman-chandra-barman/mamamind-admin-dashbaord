import { DollarSign, LineChart, TrendingUp, Wallet } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Monthly Recurring Revenue",
    value: "$6,829",
    change: "+1.2%",
    note: "vs last month",
    icon: DollarSign,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "ARR (Projected)",
    value: "$81,948",
    change: "+14.2%",
    note: "annualized run rate",
    icon: TrendingUp,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Avg Revenue Per User",
    value: "$7.21",
    change: "+0.32",
    note: "per active subscriber",
    icon: LineChart,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Total Collected (All Time)",
    value: "$43,210",
    change: "+$6,829",
    note: "since launch",
    icon: Wallet,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
];

export default function RevenueStats() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {stats.map((item) => (
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
            <p className="text-2xl font-semibold text-zinc-900">{item.value}</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 font-semibold",
                  item.changeTone,
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
