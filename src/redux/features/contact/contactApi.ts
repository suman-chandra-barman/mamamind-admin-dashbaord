/** @format */

import { baseApi } from "@/redux/api/baseApi";

export type ContactEnquiryType =
  | "general"
  | "billing"
  | "features"
  | "privacy"
  | "getting_started"
  | "support";

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

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useSendContactMessageMutation } = contactApi;
