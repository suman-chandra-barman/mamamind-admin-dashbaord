// ── Subscriptions page skeleton loaders ───────────────────────────────────────

import { Card, CardContent } from "@/components/ui/card";

function Shimmer({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-md bg-zinc-100 ${className ?? ""}`} />
  );
}

// ── Stats cards ────────────────────────────────────────────────────────────────
export function SubscriptionsSummarySkeleton() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} className="flex flex-col gap-4 p-5">
          <div className="flex items-start justify-between">
            <Shimmer className="h-3 w-32" />
            <Shimmer className="h-8 w-8 rounded-lg" />
          </div>
          <div>
            <Shimmer className="h-7 w-16" />
            <div className="mt-2 flex items-center gap-2">
              <Shimmer className="h-4 w-14 rounded-full" />
              <Shimmer className="h-3 w-24" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

// ── Filter bar ─────────────────────────────────────────────────────────────────
export function SubscriptionsFiltersSkeleton() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Shimmer className="h-9 flex-1 min-w-[220px]" />
      <Shimmer className="h-9 w-[140px]" />
      <Shimmer className="h-9 w-[140px]" />
      <Shimmer className="h-9 w-[140px]" />
    </div>
  );
}

// ── Table ──────────────────────────────────────────────────────────────────────
export function SubscriptionsTableSkeleton() {
  return (
    <Card>
      <CardContent className="pt-4">
        {/* tab strip */}
        <div className="mb-4 flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Shimmer key={i} className="h-8 w-20 rounded-md" />
          ))}
        </div>
        {/* header */}
        <div className="mb-3 grid grid-cols-7 gap-4 px-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <Shimmer key={i} className="h-3 w-3/4" />
          ))}
        </div>
        {/* rows */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-7 items-center gap-4 border-t border-zinc-100 px-2 py-3"
          >
            <div className="flex items-center gap-3">
              <Shimmer className="h-9 w-9 rounded-full" />
              <div className="space-y-1.5">
                <Shimmer className="h-3 w-24" />
                <Shimmer className="h-2.5 w-32" />
              </div>
            </div>
            <Shimmer className="h-5 w-24 rounded-full" />
            <Shimmer className="h-5 w-16 rounded-full" />
            <Shimmer className="h-3 w-12" />
            <Shimmer className="h-3 w-20" />
            <Shimmer className="h-3 w-20" />
            <Shimmer className="h-5 w-16 rounded-full" />
          </div>
        ))}
        {/* pagination */}
        <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
          <Shimmer className="h-3 w-48" />
          <div className="flex gap-2">
            <Shimmer className="h-8 w-24 rounded-md" />
            <Shimmer className="h-8 w-20 rounded-md" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
