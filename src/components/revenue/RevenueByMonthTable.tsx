import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    month: "Jan 2025",
    newMrr: "+$780",
    churned: "-$120",
    net: "$5,100",
    growth: "+18.1%",
  },
  {
    month: "Feb 2025",
    newMrr: "+$640",
    churned: "-$140",
    net: "$5,600",
    growth: "+9.8%",
  },
  {
    month: "Mar 2025",
    newMrr: "+$520",
    churned: "-$220",
    net: "$5,900",
    growth: "+5.4%",
  },
  {
    month: "Apr 2025",
    newMrr: "+$490",
    churned: "-$290",
    net: "$6,100",
    growth: "+3.4%",
  },
  {
    month: "May 2025",
    newMrr: "+$680",
    churned: "-$380",
    net: "$6,400",
    growth: "+4.9%",
  },
  {
    month: "Jun 2025",
    newMrr: "+$810",
    churned: "-$381",
    net: "$6,829",
    growth: "+6.7%",
  },
];

export default function RevenueByMonthTable() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Revenue by Month</CardTitle>
          <p className="text-sm text-zinc-500">Last 6 months breakdown</p>
        </div>
        <Button variant="outline" size="sm">
          Export CSV
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>New MRR</TableHead>
              <TableHead>Churned</TableHead>
              <TableHead>Net MRR</TableHead>
              <TableHead>Growth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.month}>
                <TableCell className="font-semibold text-zinc-900">
                  {row.month}
                </TableCell>
                <TableCell className="text-emerald-600">{row.newMrr}</TableCell>
                <TableCell className="text-rose-500">{row.churned}</TableCell>
                <TableCell className="font-semibold text-zinc-900">
                  {row.net}
                </TableCell>
                <TableCell>
                  <Badge variant="default">{row.growth}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
