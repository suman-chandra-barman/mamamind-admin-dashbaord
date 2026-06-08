/** @format */

import { baseApi } from "@/redux/api/baseApi";

export type FaqCategoryKey =
  | "all"
  | "billing"
  | "features"
  | "privacy"
  | "getting_started";

export type FaqCategory = {
  key: FaqCategoryKey;
  label: string;
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
  category: Exclude<FaqCategoryKey, "all">;
  category_display: string;
  created_at?: string;
  updated_at?: string;
};

export type FaqResponse = {
  success: boolean;
  message: string;
  data: {
    category: FaqCategoryKey;
    count: number;
    categories: FaqCategory[];
    faqs: FaqItem[];
  };
};

export type CreateFaqPayload = {
  question: string;
  answer: string;
  category: Exclude<FaqCategoryKey, "all">;
};

export type CreateFaqResponse = {
  success: boolean;
  message: string;
  data: {
    faq: FaqItem;
  };
};

type GetFaqsParams = {
  category?: FaqCategoryKey;
};

export const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query<FaqResponse, GetFaqsParams | void>({
      query: (params) => {
        const category = params?.category;
        const search =
          category && category !== "all" ? `?category=${category}` : "";

        return {
          url: `/faqs/${search}`,
          method: "GET",
        };
      },
      providesTags: ["Faq"],
    }),
    createFaq: builder.mutation<CreateFaqResponse, CreateFaqPayload>({
      query: (body) => ({
        url: "/faqs/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Faq"],
    }),
    deleteFaq: builder.mutation<{ success: boolean; message: string; data: Record<string, never> }, number>({
      query: (id) => ({
        url: `/faqs/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Faq"],
    }),
  }),
});

export const { useGetFaqsQuery, useCreateFaqMutation, useDeleteFaqMutation } = faqApi;

