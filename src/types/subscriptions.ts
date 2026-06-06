// ── Admin Subscriptions API types ─────────────────────────────────────────────

export interface SubscriptionPeriod {
  label: string;
  days: number;
  start: string;
  end: string;
}

export interface SubscriptionSummaryData {
  total_subscriptions: number;
  filtered_count: number;
  showing: number;
  page: number;
  page_size: number;
  total_pages: number;
  next_page: number | null;
  previous_page: number | null;
}

export interface StatEntry {
  value: number;
  change_percent: string | null;
  change_label: string;
  new_this_period?: number;
  previous_period?: number;
  previous_month?: number;
  previous_7_days?: number;
}

export interface SubscriptionsStats {
  active_subscriptions: StatEntry;
  cancelled_this_month: StatEntry;
  upcoming_renewals_7d: StatEntry;
}

export interface TabEntry {
  label: string;
  count: number;
}

export interface SubscriptionsTabs {
  all: TabEntry;
  active: TabEntry;
  cancelled: TabEntry;
  expired: TabEntry;
  past_due: TabEntry;
  incomplete: TabEntry;
  paused: TabEntry;
}

export interface SubscriptionsFiltersData {
  search: string;
  plan: string;
  status: string;
  billing_cycle: string;
}

export interface SubscriptionSubscriber {
  id: number;
  full_name: string;
  email: string;
  whatsapp_number: string;
  initials: string;
  role: string;
  profile_image: string | null;
  profile_image_url: string | null;
}

export interface SubscriptionPlan {
  id: number;
  name: string;
  code: string;
  price: string;
  currency: string;
  billing_cycle: string;
  billing_cycle_display: string;
  member_limit: number;
}

export interface Subscription {
  id: number;
  subscriber: SubscriptionSubscriber;
  plan: SubscriptionPlan;
  billing_cycle: string;
  billing_cycle_display: string;
  amount: string;
  currency: string;
  start_date: string;
  start_date_display: string;
  next_renewal: string | null;
  next_renewal_display: string | null;
  status: string;
  status_display: string;
  cancel_at_period_end: boolean;
  cancelled_at: string | null;
  cancelled_at_display: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  stripe_checkout_session_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface SubscriptionsData {
  period: SubscriptionPeriod;
  summary: SubscriptionSummaryData;
  stats: SubscriptionsStats;
  tabs: SubscriptionsTabs;
  filters: SubscriptionsFiltersData;
  results: Subscription[];
}

export interface SubscriptionsResponse {
  success: boolean;
  message: string;
  data: SubscriptionsData;
}

// ── Query params ───────────────────────────────────────────────────────────────
export interface SubscriptionsQueryParams {
  search?: string;
  status?: string;
  plan?: string;
  billing_cycle?: string;
  page?: number;
  page_size?: number;
  days?: number;
}
