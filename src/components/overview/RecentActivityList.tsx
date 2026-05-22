import { Activity, BellRing, CreditCard, UserPlus } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    title: "Sarah M. subscribed to Family Plan",
    time: "2 min ago",
    icon: UserPlus,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "John D. cancelled subscription",
    time: "15 min ago",
    icon: CreditCard,
    tone: "bg-rose-100 text-rose-600",
  },
  {
    title: "New user registered (Emma Lawson)",
    time: "1 hour ago",
    icon: BellRing,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    title: "Payment failed: Lisa K. (Family Plan)",
    time: "2 hours ago",
    icon: CreditCard,
    tone: "bg-rose-100 text-rose-600",
  },
  {
    title: "Bot response edited: Greeting message",
    time: "3 hours ago",
    icon: Activity,
    tone: "bg-sky-100 text-sky-700",
  },
];

export default function RecentActivityList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <p className="text-sm text-zinc-500">Live system events</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <div className={`rounded-full p-2 ${item.tone}`}>
              <item.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900">
                {item.title}
              </p>
              <p className="text-xs text-zinc-500">{item.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
