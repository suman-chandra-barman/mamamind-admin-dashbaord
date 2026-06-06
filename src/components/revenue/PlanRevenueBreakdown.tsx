"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PlanBreakdownItem } from "@/types/revenue";

interface Props {
  data: PlanBreakdownItem[];
}

export default function PlanRevenueBreakdown({ data }: Props) {
  // Separate the "Total MRR" row from individual plan rows
  const planRows = data.filter((d) => d.plan !== "Total MRR");
  const totalRow = data.find((d) => d.plan === "Total MRR");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Plan Revenue Breakdown</CardTitle>
        <p className="text-sm text-zinc-500">Revenue by subscription tier</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {planRows.map((item) => (
          <div key={item.plan} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-zinc-700">
              <span>{item.plan}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400">{item.percentage}%</span>
                <span className="font-semibold text-zinc-900">
                  ${item.revenue.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-amber-50">
              <div
                className="h-2 rounded-full bg-amber-400 transition-all duration-500"
                style={{ width: `${Math.max(item.percentage, item.revenue > 0 ? 2 : 0)}%` }}
              />
            </div>
          </div>
        ))}

        {totalRow && (
          <div className="flex items-center justify-between border-t border-zinc-100 pt-4 text-sm">
            <span className="text-zinc-500">Total MRR</span>
            <span className="font-semibold text-zinc-900">
              ${totalRow.revenue.toLocaleString()}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
