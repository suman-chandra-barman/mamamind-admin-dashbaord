import MonthlyRevenueChart from "@/components/overview/MonthlyRevenueChart";
import OverviewStats from "@/components/overview/OverviewStats";
import PlanDistributionChart from "@/components/overview/PlanDistributionChart";
import RecentActivityList from "@/components/overview/RecentActivityList";
import RecentSignupsTable from "@/components/overview/RecentSignupsTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <OverviewStats />
      <div className="grid gap-6 lg:grid-cols-2">
        <MonthlyRevenueChart />
        <PlanDistributionChart />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentSignupsTable />
        <RecentActivityList />
      </div>
    </div>
  );
}
