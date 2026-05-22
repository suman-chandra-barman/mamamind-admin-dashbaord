import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Pagination from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const rows = [
  {
    name: "Sarah Mitchell",
    email: "sarah.m@gmail.com",
    plan: "Family",
    cycle: "Monthly",
    amount: "$12.99",
    startDate: "Jan 12, 2025",
    nextRenewal: "Jul 12, 2025",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "James Okafor",
    email: "james.ok@outlook.com",
    plan: "Premium",
    cycle: "Annual",
    amount: "$99.99",
    startDate: "Feb 03, 2025",
    nextRenewal: "Feb 03, 2026",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "Priya Sharma",
    email: "priya.s@yahoo.com",
    plan: "Individual",
    cycle: "Monthly",
    amount: "$5.99",
    startDate: "Feb 18, 2025",
    nextRenewal: "Jul 18, 2025",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "Daniel Torres",
    email: "dan.torres@gmail.com",
    plan: "Family",
    cycle: "Annual",
    amount: "$129.99",
    startDate: "Mar 05, 2025",
    nextRenewal: "Mar 05, 2026",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "Emma Lawson",
    email: "emma.l@icloud.com",
    plan: "Individual",
    cycle: "Monthly",
    amount: "$5.99",
    startDate: "Mar 22, 2025",
    nextRenewal: "Jul 22, 2025",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "Oliver Wright",
    email: "o.wright@hotmail.com",
    plan: "Family",
    cycle: "Monthly",
    amount: "$12.99",
    startDate: "Apr 01, 2025",
    nextRenewal: "-",
    status: "Cancelled",
    statusVariant: "destructive",
  },
  {
    name: "Amara Diallo",
    email: "amara.d@gmail.com",
    plan: "Premium",
    cycle: "Monthly",
    amount: "$19.99",
    startDate: "Apr 14, 2025",
    nextRenewal: "Jul 14, 2025",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "Lisa Kennedy",
    email: "lisa.k@gmail.com",
    plan: "Family",
    cycle: "Monthly",
    amount: "$12.99",
    startDate: "Apr 28, 2025",
    nextRenewal: "Jul 28, 2025",
    status: "Paused",
    statusVariant: "warning",
  },
  {
    name: "Ravi Patel",
    email: "ravi.p@gmail.com",
    plan: "Individual",
    cycle: "Annual",
    amount: "$59.99",
    startDate: "May 10, 2025",
    nextRenewal: "May 10, 2026",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "Charlotte Hughes",
    email: "c.hughes@outlook.com",
    plan: "Family",
    cycle: "Monthly",
    amount: "$12.99",
    startDate: "May 24, 2025",
    nextRenewal: "Jun 24, 2025",
    status: "Expired",
    statusVariant: "muted",
  },
];

export default function SubscriptionsTable() {
  return (
    <Card>
      <CardHeader>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
            <TabsTrigger value="paused">Paused</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subscriber</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Billing Cycle</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Next Renewal</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.email}>
                <TableCell>
                  <div>
                    <p className="font-semibold text-zinc-900">{row.name}</p>
                    <p className="text-xs text-zinc-500">{row.email}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
                    {row.plan}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-700">
                    {row.cycle}
                  </span>
                </TableCell>
                <TableCell className="font-semibold text-zinc-900">
                  {row.amount}
                </TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.nextRenewal}</TableCell>
                <TableCell>
                  <Badge variant={row.statusVariant as never}>
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4">
          <Pagination totalCountLabel="Showing 1-10 of 947 results" />
        </div>
      </CardContent>
    </Card>
  );
}
