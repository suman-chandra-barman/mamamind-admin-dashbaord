/** @format */

import { baseApi } from "@/redux/api/baseApi";

// ── Enquiry types ───────────────────────────────────────────────────────────────
export type ContactEnquiryType =
  | "general"
  | "billing"
  | "features"
  | "privacy"
  | "getting_started"
  | "support";

export type ContactStatus = "new" | "in_progress" | "resolved";

// ── Message entity ──────────────────────────────────────────────────────────────
export type ContactMessage = {
  id: number;
  enquiry_type: ContactEnquiryType;
  enquiry_type_display: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactStatus;
  status_display: string;
  admin_note: string | null;
  created_at: string;
  updated_at: string;
};

// ── API response types ──────────────────────────────────────────────────────────
export type EnquiryTypeOption = { key: string; label: string };
export type StatusOption = { key: string; label: string };

export type AdminMessagesResponse = {
  success: boolean;
  message: string;
  data: {
    count: number;
    enquiry_types: EnquiryTypeOption[];
    statuses: StatusOption[];
    messages: ContactMessage[];
  };
};

export type GetAdminMessagesParams = {
  status?: string;
  enquiry_type?: string;
  search?: string;
};

// ── Send message (user-facing) types ───────────────────────────────────────────
export type ContactMessageRequest = {
  enquiry_type: ContactEnquiryType;
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactMessageResponse = {
  success: boolean;
  message: string;
  data: {
    contact_message: {
      id: number;
      enquiry_type: ContactEnquiryType;
      enquiry_type_display: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      created_at: string;
    };
  };
};

// ── API slice ───────────────────────────────────────────────────────────────────
export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminMessages: builder.query<
      AdminMessagesResponse,
      GetAdminMessagesParams | void
    >({
      query: (params) => {
        const p = new URLSearchParams();
        if (params?.status && params.status !== "all")
          p.set("status", params.status);
        if (params?.enquiry_type && params.enquiry_type !== "all")
          p.set("enquiry_type", params.enquiry_type);
        if (params?.search) p.set("search", params.search);

        const qs = p.toString();
        return {
          url: `/contact/admin/messages/${qs ? `?${qs}` : ""}`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
    sendContactMessage: builder.mutation<
      ContactMessageResponse,
      ContactMessageRequest
    >({
      query: (payload) => ({
        url: "/contact/messages/",
        method: "POST",
        body: payload,
      }),
    }),
    deleteAdminMessage: builder.mutation<{ success: boolean; message: string; data: Record<string, never> }, number>({
      query: (id) => ({
        url: `/contact/admin/messages/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAdminMessagesQuery,
  useSendContactMessageMutation,
  useDeleteAdminMessageMutation,
} = contactApi;

