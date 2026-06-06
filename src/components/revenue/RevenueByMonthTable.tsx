"use client";

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
import type { RevenueByMonthItem } from "@/types/revenue";

interface Props {
  data: RevenueByMonthItem[];
}

export default function RevenueByMonthTable({ data }: Props) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Revenue by Month</CardTitle>
          <p className="text-sm text-zinc-500">
            Last {data.length} months breakdown
          </p>
        </div>
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
            {data.map((row) => {
              const growthNum = parseFloat(row.growth);
              return (
                <TableRow key={row.month}>
                  <TableCell className="font-semibold text-zinc-900">
                    {row.month}
                  </TableCell>
                  <TableCell className="text-emerald-600">
                    ${row.new_mrr}
                  </TableCell>
                  <TableCell className="text-rose-500">
                    ${row.churned}
                  </TableCell>
                  <TableCell className="font-semibold text-zinc-900">
                    ${row.net_mrr.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        growthNum > 0
                          ? "default"
                          : growthNum < 0
                            ? ("destructive" as never)
                            : ("muted" as never)
                      }
                    >
                      {row.growth}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
