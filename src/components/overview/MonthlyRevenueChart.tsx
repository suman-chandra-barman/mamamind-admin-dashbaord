"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", value: 4100 },
  { name: "Feb", value: 4550 },
  { name: "Mar", value: 4900 },
  { name: "Apr", value: 5350 },
  { name: "May", value: 5650 },
  { name: "Jun", value: 6100 },
];

export default function MonthlyRevenueChart() {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-start justify-between gap-3">
        <div>
          <CardTitle>Monthly Revenue</CardTitle>
          <p className="text-sm text-zinc-500">Last 6 months performance</p>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          Jan - Jun 2025
        </span>
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" />
            <XAxis dataKey="name" stroke="#a29b8f" fontSize={12} />
            <YAxis stroke="#a29b8f" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #f0ece6",
                borderRadius: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#c8a46b"
              strokeWidth={2}
              dot={{ r: 4, fill: "#c8a46b" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
