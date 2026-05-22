import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Total Users",
    value: "1,284",
    change: "+3.1%",
    note: "+38 this month",
    icon: Users,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Active Subscriptions",
    value: "947",
    change: "+2.4%",
    note: "73.7% of total users",
    icon: CreditCard,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Monthly Revenue (MRR)",
    value: "$6,829",
    change: "+1.2%",
    note: "vs last month",
    icon: DollarSign,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Churn Rate",
    value: "4.2%",
    change: "-0.8%",
    note: "vs last month",
    icon: Activity,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-rose-100 text-rose-600",
  },
];

export default function OverviewStats() {
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
