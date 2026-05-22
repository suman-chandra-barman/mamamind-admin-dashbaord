import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows = [
  {
    name: "Sarah Mitchell",
    email: "sarah.m@gmail.com",
    plan: "Family",
    date: "Jun 12, 2025",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "James Okafor",
    email: "james.ok@outlook.com",
    plan: "Premium",
    date: "Jun 11, 2025",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "Priya Sharma",
    email: "priya.s@yahoo.com",
    plan: "Individual",
    date: "Jun 10, 2025",
    status: "Pending",
    statusVariant: "warning",
  },
  {
    name: "Daniel Torres",
    email: "dan.torres@gmail.com",
    plan: "Family",
    date: "Jun 10, 2025",
    status: "Active",
    statusVariant: "default",
  },
  {
    name: "Emma Lawson",
    email: "emma.l@icloud.com",
    plan: "Individual",
    date: "Jun 09, 2025",
    status: "Active",
    statusVariant: "default",
  },
];

export default function RecentSignupsTable() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Signups</CardTitle>
          <p className="text-sm text-zinc-500">Latest user registrations</p>
        </div>
        <button className="text-xs font-semibold text-amber-700">
          View all
        </button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Date</TableHead>
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
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Badge variant={row.statusVariant as never}>
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
