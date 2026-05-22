import PlanRevenueBreakdown from "@/components/revenue/PlanRevenueBreakdown";
import RevenueByMonthTable from "@/components/revenue/RevenueByMonthTable";
import RevenueChart from "@/components/revenue/RevenueChart";
import RevenueStats from "@/components/revenue/RevenueStats";

export default function RevenuePage() {
  return (
    <div className="space-y-6">
      <RevenueStats />
      <RevenueChart />
      <div className="grid gap-6 lg:grid-cols-2">
        <PlanRevenueBreakdown />
        <RevenueByMonthTable />
      </div>
    </div>
  );
}
