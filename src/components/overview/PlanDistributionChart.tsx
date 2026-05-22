"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Individual", value: 437, color: "#d8b78a" },
  { name: "Family", value: 617, color: "#c39b63" },
  { name: "Premium", value: 230, color: "#ead7b7" },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

export default function PlanDistributionChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Subscribers by Plan</CardTitle>
        <p className="text-sm text-zinc-500">Current distribution</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 pt-2">
        <div className="h-[210px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={4}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #f0ece6",
                  borderRadius: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2 text-sm">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between text-zinc-600"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {item.name}
              </div>
              <span className="text-zinc-500">
                {item.value} {Math.round((item.value / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
