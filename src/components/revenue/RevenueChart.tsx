"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jul 24", value: 4200 },
  { name: "Aug 24", value: 4500 },
  { name: "Sep 24", value: 4300 },
  { name: "Oct 24", value: 4800 },
  { name: "Nov 24", value: 5100 },
  { name: "Dec 24", value: 5400 },
  { name: "Jan 25", value: 5200 },
  { name: "Feb 25", value: 5800 },
  { name: "Mar 25", value: 6100 },
  { name: "Apr 25", value: 6400 },
  { name: "May 25", value: 6700 },
  { name: "Jun 25", value: 7100 },
];

export default function RevenueChart() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-3">
        <div>
          <CardTitle>Revenue Over Time</CardTitle>
          <p className="text-sm text-zinc-500">
            Monthly revenue for the last 12 months
          </p>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          Jul 2024 - Jun 2025
        </span>
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
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
            <Bar dataKey="value" fill="#c8a46b" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
