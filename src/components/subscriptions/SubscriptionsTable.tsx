"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Pagination from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type {
  Subscription,
  SubscriptionSummaryData,
  SubscriptionsTabs,
} from "@/types/subscriptions";

// ── Status badge colour map ────────────────────────────────────────────────────
const STATUS_VARIANT: Record<string, string> = {
  active: "default",
  cancelled: "destructive",
  expired: "muted",
  paused: "warning",
  past_due: "warning",
  incomplete: "muted",
};

// ── Tab keys ordered for display ──────────────────────────────────────────────
const TAB_KEYS: (keyof SubscriptionsTabs)[] = [
  "all",
  "active",
  "cancelled",
  "expired",
  "past_due",
  "paused",
  "incomplete",
];

// ── Props ──────────────────────────────────────────────────────────────────────
interface Props {
  subscriptions: Subscription[];
  summary: SubscriptionSummaryData;
  tabs: SubscriptionsTabs;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onPageChange: (page: number) => void;
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function SubscriptionsTable({
  subscriptions,
  summary,
  tabs,
  activeTab,
  onTabChange,
  onPageChange,
}: Props) {
  const { page, total_pages, filtered_count, showing } = summary;
  const start = (page - 1) * showing + 1;
  const end = Math.min(page * showing, filtered_count);
  const countLabel = `Showing ${start}–${end} of ${filtered_count.toLocaleString()} subscriptions`;

  return (
    <Card>
      <CardHeader className="pb-0">
        {/* Status tabs — status filter is driven from the page level */}
        <Tabs value={activeTab} onValueChange={onTabChange}>
          <TabsList className="flex-wrap h-auto gap-1">
            {TAB_KEYS.map((key) => {
              const tab = tabs[key];
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="gap-1.5 text-xs"
                >
                  {tab.label}
                  <span className="rounded-full bg-zinc-200 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-700 tabsdata-[state=active]:bg-white">
                    {tab.count}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </CardHeader>

      <CardContent className="pt-4">
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
            {subscriptions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="py-16 text-center text-sm text-zinc-500"
                >
                  No subscriptions match your filters.
                </TableCell>
              </TableRow>
            ) : (
              subscriptions.map((sub) => (
                <TableRow key={sub.id} className="group">
                  {/* Subscriber */}
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 ring-2 ring-amber-100">
                        <AvatarImage
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${sub.subscriber.profile_image}`}
                          alt={sub.subscriber.full_name}
                        />
                        <AvatarFallback className="bg-amber-100 text-xs font-semibold text-amber-700">
                          {sub.subscriber.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors">
                          {sub.subscriber.full_name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {sub.subscriber.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Plan */}
                  <TableCell>
                    <div>
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                        {sub.plan.name}
                      </span>
                      <p className="mt-1 text-xs text-zinc-400">
                        Up to {sub.plan.member_limit} members
                      </p>
                    </div>
                  </TableCell>

                  {/* Billing Cycle */}
                  <TableCell>
                    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                      {sub.billing_cycle_display}
                    </span>
                  </TableCell>

                  {/* Amount */}
                  <TableCell className="font-semibold text-zinc-900">
                    ${sub.amount}{" "}
                    <span className="text-xs font-normal text-zinc-400 uppercase">
                      {sub.currency}
                    </span>
                  </TableCell>

                  {/* Start Date */}
                  <TableCell className="text-sm text-zinc-700">
                    {sub.start_date_display}
                  </TableCell>

                  {/* Next Renewal */}
                  <TableCell className="text-sm text-zinc-700">
                    {sub.cancel_at_period_end ? (
                      <span className="text-rose-500 text-xs font-medium">
                        Cancels{" "}
                        {sub.next_renewal_display ?? sub.next_renewal ?? "—"}
                      </span>
                    ) : (
                      sub.next_renewal_display ?? "—"
                    )}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <Badge
                      variant={
                        (STATUS_VARIANT[sub.status] ?? "muted") as never
                      }
                    >
                      {sub.status_display}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {total_pages > 1 && (
          <div className="mt-4">
            <Pagination
              totalCountLabel={countLabel}
              currentPage={page}
              totalPages={total_pages}
              onPrev={() => onPageChange(page - 1)}
              onNext={() => onPageChange(page + 1)}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
