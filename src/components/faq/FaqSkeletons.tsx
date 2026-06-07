// ── FAQ page skeleton loaders ──────────────────────────────────────────────────

import { Card, CardContent } from "@/components/ui/card";

// ── Reusable shimmer primitive ─────────────────────────────────────────────────
function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-zinc-100 ${className ?? ""}`}
    />
  );
}

// ── Header stats row ────────────────────────────────────────────────────────────
export function FaqStatsSkeleton() {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} className="flex-1 min-w-[160px] p-5">
          <Shimmer className="h-3 w-24 mb-3" />
          <Shimmer className="h-7 w-12" />
        </Card>
      ))}
    </div>
  );
}

// ── Category tabs ───────────────────────────────────────────────────────────────
export function FaqTabsSkeleton() {
  return (
    <div className="flex gap-2 flex-wrap">
      {Array.from({ length: 5 }).map((_, i) => (
        <Shimmer key={i} className="h-8 w-24 rounded-full" />
      ))}
    </div>
  );
}

// ── FAQ list ────────────────────────────────────────────────────────────────────
export function FaqListSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <Shimmer className="h-4 w-3/4" />
                <Shimmer className="h-3 w-full" />
                <Shimmer className="h-3 w-2/3" />
              </div>
              <Shimmer className="h-6 w-16 rounded-full flex-shrink-0" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
