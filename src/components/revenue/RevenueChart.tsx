"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RevenueOverTimePoint } from "@/types/revenue";

interface Props {
  data: RevenueOverTimePoint[];
}

export default function RevenueChart({ data }: Props) {
  const chartData = data.map((p) => ({
    name: `${p.month} ${p.year}`,
    value: parseFloat(p.revenue),
  }));

  // Determine date range label from data
  const first = data[0];
  const last = data[data.length - 1];
  const rangeLabel =
    first && last
      ? `${first.month} ${first.year} – ${last.month} ${last.year}`
      : "";

  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-3">
        <div>
          <CardTitle>Revenue Over Time</CardTitle>
          <p className="text-sm text-zinc-500">
            Monthly revenue ({data.length} months)
          </p>
        </div>
        {rangeLabel && (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 whitespace-nowrap">
            {rangeLabel}
          </span>
        )}
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" />
            <XAxis dataKey="name" stroke="#a29b8f" fontSize={12} />
            <YAxis
              stroke="#a29b8f"
              fontSize={12}
              tickFormatter={(v) => `$${v}`}
            />
            <Tooltip
              formatter={(v: number) => [`$${v.toFixed(2)}`, "Revenue"]}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #f0ece6",
                borderRadius: "12px",
              }}
            />
            <Bar dataKey="value" fill="#c8a46b" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
