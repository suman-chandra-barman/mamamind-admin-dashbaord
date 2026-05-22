import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Pagination from "@/components/ui/pagination";
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
    members: 4,
    joinDate: "Jan 12, 2025",
    lastActive: "Today",
    status: "Active",
    statusVariant: "default",
    initials: "SM",
  },
  {
    name: "James Okafor",
    email: "james.ok@outlook.com",
    plan: "Premium",
    members: 6,
    joinDate: "Feb 03, 2025",
    lastActive: "Today",
    status: "Active",
    statusVariant: "default",
    initials: "JO",
  },
  {
    name: "Priya Sharma",
    email: "priya.s@yahoo.com",
    plan: "Individual",
    members: 1,
    joinDate: "Feb 18, 2025",
    lastActive: "2 days ago",
    status: "Active",
    statusVariant: "default",
    initials: "PS",
  },
  {
    name: "Daniel Torres",
    email: "dan.torres@gmail.com",
    plan: "Family",
    members: 3,
    joinDate: "Mar 05, 2025",
    lastActive: "Yesterday",
    status: "Active",
    statusVariant: "default",
    initials: "DT",
  },
  {
    name: "Emma Lawson",
    email: "emma.l@icloud.com",
    plan: "Individual",
    members: 1,
    joinDate: "Mar 22, 2025",
    lastActive: "Today",
    status: "Active",
    statusVariant: "default",
    initials: "EL",
  },
  {
    name: "Oliver Wright",
    email: "o.wright@hotmail.com",
    plan: "Family",
    members: 5,
    joinDate: "Apr 01, 2025",
    lastActive: "5 days ago",
    status: "Inactive",
    statusVariant: "muted",
    initials: "OW",
  },
  {
    name: "Amara Diallo",
    email: "amara.d@gmail.com",
    plan: "Premium",
    members: 7,
    joinDate: "Apr 14, 2025",
    lastActive: "Today",
    status: "Active",
    statusVariant: "default",
    initials: "AD",
  },
  {
    name: "Lisa Kennedy",
    email: "lisa.k@gmail.com",
    plan: "Family",
    members: 4,
    joinDate: "Apr 28, 2025",
    lastActive: "3 days ago",
    status: "Active",
    statusVariant: "default",
    initials: "LK",
  },
  {
    name: "Ravi Patel",
    email: "ravi.p@gmail.com",
    plan: "Individual",
    members: 1,
    joinDate: "May 10, 2025",
    lastActive: "Today",
    status: "Active",
    statusVariant: "default",
    initials: "RP",
  },
  {
    name: "Charlotte Hughes",
    email: "c.hughes@outlook.com",
    plan: "Family",
    members: 3,
    joinDate: "May 24, 2025",
    lastActive: "Today",
    status: "Active",
    statusVariant: "default",
    initials: "CH",
  },
];

export default function UsersTable() {
  return (
    <Card>
      <CardContent className="pt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">
                      {row.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">{row.name}</p>
                      <p className="text-xs text-zinc-500">{row.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
                    {row.plan}
                  </span>
                </TableCell>
                <TableCell>{row.members}</TableCell>
                <TableCell>{row.joinDate}</TableCell>
                <TableCell>{row.lastActive}</TableCell>
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
          <Pagination totalCountLabel="Showing 1-10 of 1,284 results" />
        </div>
      </CardContent>
    </Card>
  );
}
