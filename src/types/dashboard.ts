// ── Dashboard Overview API types ──────────────────────────────────────────────

export interface DashboardPeriod {
  label: string;
  days: number;
  start: string;
  end: string;
}

export interface DashboardAdmin {
  id: number;
  full_name: string;
  email: string;
  role: string;
  is_staff: boolean;
  is_superuser: boolean;
  profile_image: string | null;
  profile_image_url: string | null;
}

export interface DashboardNotifications {
  unread_count: number;
}

export interface StatEntry {
  value: number | string;
  change_percent: string | null;
  change_label: string;
  new_this_period?: number;
  previous_period?: number | string;
}

export interface ActiveSubscriptionStat extends StatEntry {
  ratio_label: string;
  total_family_owners: number;
}

export interface MonthlyRevenueStat {
  value: string;
  currency: string;
  change_percent: string | null;
  change_label: string;
  previous_period_revenue: string;
}

export interface ChurnRateStat {
  value: string;
  change_percent: string;
  change_label: string;
  cancelled_this_period: number;
  cancelled_previous_period: number;
}

export interface DashboardStats {
  total_users: StatEntry;
  active_subscriptions: ActiveSubscriptionStat;
  monthly_revenue: MonthlyRevenueStat;
  churn_rate: ChurnRateStat;
}

export interface MonthlyRevenuePoint {
  month: string;
  year: number;
  revenue: string;
}

export interface SubscribersByPlan {
  plan_id: number;
  plan_name: string;
  plan_code: string;
  count: number;
  percentage: string;
}

export interface DashboardOverviewData {
  period: DashboardPeriod;
  admin: DashboardAdmin;
  notifications: DashboardNotifications;
  stats: DashboardStats;
  monthly_revenue_chart: MonthlyRevenuePoint[];
  subscribers_by_plan: SubscribersByPlan[];
}

export interface DashboardOverviewResponse {
  success: boolean;
  message: string;
  data: DashboardOverviewData;
}
