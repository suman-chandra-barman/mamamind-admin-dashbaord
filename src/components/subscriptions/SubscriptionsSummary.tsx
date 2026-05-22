import { CreditCard, RefreshCw, UserCheck } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Active Subscriptions",
    value: "947",
    change: "+2.1%",
    note: "currently active",
    icon: UserCheck,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Cancelled This Month",
    value: "39",
    change: "-1.4%",
    note: "vs 44 last month",
    icon: CreditCard,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-rose-100 text-rose-600",
  },
  {
    label: "Upcoming Renewals (7d)",
    value: "112",
    change: "+1.8%",
    note: "renewals this week",
    icon: RefreshCw,
    tone: "bg-amber-100 text-amber-700",
    changeTone: "bg-emerald-100 text-emerald-700",
  },
];

export default function SubscriptionsSummary() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
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
