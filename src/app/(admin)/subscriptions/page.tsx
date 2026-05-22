import SubscriptionsSummary from "@/components/subscriptions/SubscriptionsSummary";
import SubscriptionsTable from "@/components/subscriptions/SubscriptionsTable";

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      <SubscriptionsSummary />
      <SubscriptionsTable />
    </div>
  );
}
