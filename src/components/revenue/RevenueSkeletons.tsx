// ── Revenue page skeleton loaders ─────────────────────────────────────────────

import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Shimmer({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-zinc-100 ${className ?? ""}`}
      style={style}
    />
  );
}

// ── 4-col stat cards ───────────────────────────────────────────────────────────
export function RevenueStatsSkeleton() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="flex flex-col gap-4 p-5">
          <div className="flex items-start justify-between">
            <Shimmer className="h-3 w-36" />
            <Shimmer className="h-8 w-8 rounded-lg" />
          </div>
          <div>
            <Shimmer className="h-7 w-20" />
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

// ── Bar chart ──────────────────────────────────────────────────────────────────
export function RevenueChartSkeleton() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-3">
        <div className="space-y-2">
          <Shimmer className="h-5 w-40" />
          <Shimmer className="h-3 w-56" />
        </div>
        <Shimmer className="h-6 w-32 rounded-full" />
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex h-[260px] items-end gap-3 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <Shimmer
                className="w-full rounded-t-md"
                style={{ height: `${30 + Math.random() * 160}px` } as React.CSSProperties}
              />
              <Shimmer className="h-2.5 w-10" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ── Plan breakdown ─────────────────────────────────────────────────────────────
export function PlanRevenueBreakdownSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Shimmer className="h-5 w-44" />
        <Shimmer className="mt-1 h-3 w-36" />
      </CardHeader>
      <CardContent className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between">
              <Shimmer className="h-3 w-28" />
              <Shimmer className="h-3 w-16" />
            </div>
            <Shimmer className="h-2 w-full rounded-full" />
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
          <Shimmer className="h-3 w-20" />
          <Shimmer className="h-3 w-16" />
        </div>
      </CardContent>
    </Card>
  );
}

// ── Revenue by month table ─────────────────────────────────────────────────────
export function RevenueByMonthTableSkeleton() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div className="space-y-2">
          <Shimmer className="h-5 w-36" />
          <Shimmer className="h-3 w-44" />
        </div>
        <Shimmer className="h-8 w-24 rounded-md" />
      </CardHeader>
      <CardContent>
        <div className="mb-3 grid grid-cols-5 gap-4 px-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Shimmer key={i} className="h-3 w-3/4" />
          ))}
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-5 items-center gap-4 border-t border-zinc-100 px-2 py-3"
          >
            <Shimmer className="h-3 w-20" />
            <Shimmer className="h-3 w-12" />
            <Shimmer className="h-3 w-12" />
            <Shimmer className="h-3 w-14" />
            <Shimmer className="h-5 w-16 rounded-full" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
