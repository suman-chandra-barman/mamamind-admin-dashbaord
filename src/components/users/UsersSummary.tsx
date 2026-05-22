import { Card } from "@/components/ui/card";

export default function UsersSummary() {
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600">
        <span className="font-semibold text-zinc-900">1,284 total users</span>
        <span className="text-zinc-300">|</span>
        <span>Showing 10 results</span>
      </div>
    </Card>
  );
}
