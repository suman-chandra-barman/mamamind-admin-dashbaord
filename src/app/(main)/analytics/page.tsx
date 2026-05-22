"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  BellRing,
  MessageCircle,
  Users,
  Download,
  ChevronDown,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const statCards = [
  {
    label: "Reminders Triggered",
    value: "312",
    change: "+8.7%",
    changeLabel: "triggered today",
    icon: BellRing,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    label: "Active Users Today",
    value: "489",
    change: "+5.4%",
    changeLabel: "unique active users",
    icon: Users,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    label: "Avg Messages / User",
    value: "5.8",
    change: "+0.4",
    changeLabel: "per active user",
    icon: MessageCircle,
    tone: "bg-amber-100 text-amber-700",
  },
];

const featureUsage = [
  { name: "Reminders", value: 9200 },
  { name: "Meal Planning", value: 5600 },
  { name: "Location Search", value: 4200 },
  { name: "School Messages", value: 3100 },
  { name: "Calendar Sync", value: 2200 },
  { name: "Conflict Detection", value: 1800 },
];

const dailyActiveUsers = [
  { day: "D1", value: 380 },
  { day: "D3", value: 430 },
  { day: "D5", value: 420 },
  { day: "D7", value: 410 },
  { day: "D9", value: 360 },
  { day: "D11", value: 310 },
  { day: "D13", value: 330 },
  { day: "D15", value: 320 },
  { day: "D17", value: 380 },
  { day: "D19", value: 420 },
  { day: "D21", value: 440 },
  { day: "D23", value: 430 },
  { day: "D25", value: 390 },
  { day: "D27", value: 340 },
  { day: "D29", value: 360 },
];

const heatmapDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const heatmapHours = ["6a", "8a", "10a", "12p", "2p", "4p", "6p", "8p", "10p"];
const heatmapValues = [
  [1, 2, 3, 2, 2, 1, 1],
  [2, 3, 3, 3, 2, 2, 2],
  [3, 4, 4, 4, 3, 2, 2],
  [2, 3, 4, 4, 3, 2, 1],
  [1, 2, 3, 3, 2, 2, 1],
  [2, 3, 4, 3, 3, 2, 1],
  [3, 4, 4, 4, 3, 2, 2],
  [2, 3, 3, 3, 2, 2, 1],
  [1, 2, 2, 2, 2, 1, 1],
];
const heatmapTones = [
  "bg-amber-50",
  "bg-amber-100",
  "bg-amber-200",
  "bg-amber-300",
  "bg-amber-400",
];

const activityLog = [
  {
    user: "Sarah Mitchell",
    initials: "SM",
    action: "Set reminder",
    feature: "Reminders",
    timestamp: "10:34 AM, Jun 12",
    tone: "bg-amber-100 text-amber-700",
  },
  {
    user: "James Okafor",
    initials: "JO",
    action: "Added meal plan",
    feature: "Meal Planning",
    timestamp: "10:28 AM, Jun 12",
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    user: "Priya Sharma",
    initials: "PS",
    action: "Location search",
    feature: "Location Services",
    timestamp: "10:22 AM, Jun 12",
    tone: "bg-amber-100 text-amber-700",
  },
  {
    user: "Daniel Torres",
    initials: "DT",
    action: "Checked schedule",
    feature: "Calendar Sync",
    timestamp: "10:15 AM, Jun 12",
    tone: "bg-sky-100 text-sky-700",
  },
  {
    user: "Emma Lawson",
    initials: "EL",
    action: "School message sent",
    feature: "School Messages",
    timestamp: "09:58 AM, Jun 12",
    tone: "bg-zinc-100 text-zinc-700",
  },
  {
    user: "Amara Diallo",
    initials: "AD",
    action: "Conflict detected",
    feature: "Conflict Detection",
    timestamp: "09:41 AM, Jun 12",
    tone: "bg-rose-100 text-rose-700",
  },
  {
    user: "Ravi Patel",
    initials: "RP",
    action: "Set 3 reminders",
    feature: "Reminders",
    timestamp: "09:30 AM, Jun 12",
    tone: "bg-amber-100 text-amber-700",
  },
  {
    user: "Charlotte Hughes",
    initials: "CH",
    action: "Updated meal plan",
    feature: "Meal Planning",
    timestamp: "09:17 AM, Jun 12",
    tone: "bg-emerald-100 text-emerald-700",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {statCards.map((card) => (
          <Card key={card.label} className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  {card.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-zinc-900">
                  {card.value}
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700">
                    {card.change}
                  </span>
                  <span>{card.changeLabel}</span>
                </div>
              </div>
              <div className={`rounded-2xl p-3 ${card.tone}`}>
                <card.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Most Used Features</CardTitle>
            <CardDescription>
              Total usage count across all users
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart
                data={featureUsage}
                layout="vertical"
                margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" />
                <XAxis
                  type="number"
                  stroke="#a29b8f"
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="#a29b8f"
                  fontSize={12}
                  width={120}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #f0ece6",
                    borderRadius: "12px",
                  }}
                />
                <Bar dataKey="value" fill="#c8a46b" radius={[10, 10, 10, 10]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage by Day & Hour</CardTitle>
            <CardDescription>Peak usage heatmap</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-[auto_repeat(7,minmax(0,1fr))] items-center gap-2 text-xs text-zinc-400">
                <span className="w-7" />
                {heatmapDays.map((day) => (
                  <span key={day} className="text-center">
                    {day}
                  </span>
                ))}
              </div>
              {heatmapHours.map((hour, rowIndex) => (
                <div
                  key={hour}
                  className="grid grid-cols-[auto_repeat(7,minmax(0,1fr))] items-center gap-2"
                >
                  <span className="w-7 text-xs text-zinc-400">{hour}</span>
                  {heatmapDays.map((day, colIndex) => (
                    <div
                      key={`${day}-${hour}`}
                      className={`h-3 rounded-full ${
                        heatmapTones[heatmapValues[rowIndex][colIndex]]
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span>Low</span>
              <div className="flex items-center gap-1">
                {heatmapTones.map((tone, index) => (
                  <span
                    key={tone}
                    className={`h-2.5 w-6 rounded-full ${tone} ${
                      index === 0 ? "border border-amber-100" : ""
                    }`}
                  />
                ))}
              </div>
              <span>High</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle>Daily Active Users</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </div>
          <Badge className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            May 13 - Jun 12, 2025
          </Badge>
        </CardHeader>
        <CardContent className="pt-2">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={dailyActiveUsers}
              margin={{ top: 5, right: 20, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0ece6" />
              <XAxis dataKey="day" stroke="#a29b8f" fontSize={12} />
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
                dot={{ r: 3, fill: "#c8a46b" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <CardTitle>Recent Activity Log</CardTitle>
            <CardDescription>All user actions across features</CardDescription>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="h-9 w-[150px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All features</SelectItem>
                <SelectItem value="reminders">Reminders</SelectItem>
                <SelectItem value="meal">Meal Planning</SelectItem>
                <SelectItem value="calendar">Calendar Sync</SelectItem>
              </SelectContent>
            </Select>
            <div className="w-[200px]">
              <Input placeholder="Search" className="h-9" />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Feature</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityLog.map((row) => (
                <TableRow key={`${row.user}-${row.timestamp}`}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${row.tone}`}
                      >
                        {row.initials}
                      </div>
                      <span className="font-medium text-zinc-900">
                        {row.user}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-600">{row.action}</TableCell>
                  <TableCell>
                    <Badge className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {row.feature}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-zinc-500">
                    {row.timestamp}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-4 text-xs text-zinc-500">
            <span>Showing 1-8 of 2,847 results</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                Next
                <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
