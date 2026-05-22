import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  { label: "Premium Family", value: "$2,340", percent: 34 },
  { label: "Family", value: "$3,012", percent: 44 },
  { label: "Individual", value: "$1,477", percent: 22 },
];

export default function PlanRevenueBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plan Revenue Breakdown</CardTitle>
        <p className="text-sm text-zinc-500">Revenue by subscription tier</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-zinc-700">
              <span>{item.label}</span>
              <span className="font-semibold text-zinc-900">{item.value}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-amber-50">
              <div
                className="h-2 rounded-full bg-amber-400"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-zinc-100 pt-4 text-sm">
          <span className="text-zinc-500">Total MRR</span>
          <span className="font-semibold text-zinc-900">$6,829</span>
        </div>
      </CardContent>
    </Card>
  );
}
