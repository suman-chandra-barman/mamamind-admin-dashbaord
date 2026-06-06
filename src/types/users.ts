// ── Admin Users API types ──────────────────────────────────────────────────────

export interface UserFamily {
  id: number;
  name: string;
  owner_id: number;
}

export interface UserMembership {
  id: number;
  relation: string;
  relation_display: string;
  status: string;
  status_display: string;
}

export interface UserPlan {
  id: number;
  name: string;
  code: string;
  price: string;
  currency: string;
  billing_cycle: string;
}

export interface AdminUser {
  id: number;
  full_name: string;
  email: string;
  whatsapp_number: string;
  initials: string;
  role: string;
  status: string;
  status_display: string;
  is_email_verified: boolean;
  is_active: boolean;
  join_date: string;
  join_date_display: string;
  last_active: string | null;
  last_active_display: string;
  profile_image: string | null;
  profile_image_url: string | null;
  family: UserFamily | null;
  membership: UserMembership | null;
  plan: UserPlan | null;
  members_count: number;
}

export interface UsersSummaryData {
  total_users: number;
  filtered_count: number;
  showing: number;
  page: number;
  page_size: number;
  total_pages: number;
  next_page: number | null;
  previous_page: number | null;
}

export interface UsersFilters {
  search: string;
  plan: string;
  status: string;
}

export interface UsersData {
  summary: UsersSummaryData;
  filters: UsersFilters;
  results: AdminUser[];
}

export interface UsersResponse {
  success: boolean;
  message: string;
  data: UsersData;
}

// ── Query params ───────────────────────────────────────────────────────────────
export interface UsersQueryParams {
  search?: string;
  plan?: string;
  status?: string;
  page?: number;
  page_size?: number;
}
