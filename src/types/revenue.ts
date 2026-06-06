// ── Admin Revenue API types ────────────────────────────────────────────────────

export interface RevenueMetric {
  value: number;
  currency: string;
  change_percent: string;
  change_label?: string;
  annualized_run_rate?: boolean;
}

export interface TotalCollected {
  value: number;
  currency: string;
  change_value: number;
  change_label: string;
}

export interface RevenueOverTimePoint {
  month: string;
  year: number;
  revenue: string;
}

export interface PlanBreakdownItem {
  plan: string;
  revenue: number;
  percentage: number;
}

export interface RevenueByMonthItem {
  month: string;
  new_mrr: string;
  churned: string;
  net_mrr: number;
  growth: string;
}

export interface RevenueData {
  period: string;
  monthly_recurring_revenue: RevenueMetric;
  arr_projected: RevenueMetric;
  avg_revenue_per_user: RevenueMetric;
  total_collected: TotalCollected;
  revenue_over_time: RevenueOverTimePoint[];
  plan_breakdown: PlanBreakdownItem[];
  revenue_by_month: RevenueByMonthItem[];
}

export interface RevenueResponse {
  success: boolean;
  message: string;
  data: RevenueData;
}
