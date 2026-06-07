"use client";

import { useState } from "react";
import { AlertCircle, BookOpen, CheckCircle2, HelpCircle } from "lucide-react";

import { useGetFaqsQuery, type FaqCategoryKey } from "@/redux/features/faq/faqApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";

import FaqList from "@/components/faq/FaqList";
import CreateFaqModal from "@/components/faq/CreateFaqModal";
import {
  FaqStatsSkeleton,
  FaqTabsSkeleton,
  FaqListSkeleton,
} from "@/components/faq/FaqSkeletons";
import { Card } from "@/components/ui/card";

// ── Category tab styles ─────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, { active: string; base: string }> = {
  all: {
    active: "bg-zinc-900 text-white border-zinc-900",
    base: "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400",
  },
  billing: {
    active: "bg-amber-600 text-white border-amber-600",
    base: "bg-white text-zinc-600 border-zinc-200 hover:border-amber-300",
  },
  features: {
    active: "bg-sky-600 text-white border-sky-600",
    base: "bg-white text-zinc-600 border-zinc-200 hover:border-sky-300",
  },
  privacy: {
    active: "bg-purple-600 text-white border-purple-600",
    base: "bg-white text-zinc-600 border-zinc-200 hover:border-purple-300",
  },
  getting_started: {
    active: "bg-emerald-600 text-white border-emerald-600",
    base: "bg-white text-zinc-600 border-zinc-200 hover:border-emerald-300",
  },
};

function getCategoryStyle(key: string, isActive: boolean) {
  const styles = CATEGORY_COLORS[key] ?? CATEGORY_COLORS["all"];
  return isActive ? styles.active : styles.base;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function FAQPage() {
  const token = useAppSelector(selectCurrentToken);
  const [activeCategory, setActiveCategory] = useState<FaqCategoryKey>("all");

  const { data, isLoading, isFetching, isError, refetch } = useGetFaqsQuery(
    { category: activeCategory },
    { skip: !token },
  );

  const loading = !token || isLoading || isFetching;
  const faqData = data?.data;

  // Derived stats
  const totalFaqs = faqData?.count ?? 0;
  const categories = faqData?.categories ?? [];
  const faqs = faqData?.faqs ?? [];
  const contentCategories = categories.filter((c) => c.key !== "all");

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-zinc-900">FAQ Management</h1>
          <p className="mt-0.5 text-sm text-zinc-500">
            Manage frequently asked questions displayed to your users.
          </p>
        </div>
        {!loading && (
          <CreateFaqModal categories={categories} />
        )}
      </div>

      {/* ── Error state ── */}
      {isError && !loading && (
        <div className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>
            Failed to load FAQs.{" "}
            <button
              onClick={() => refetch()}
              className="font-semibold underline underline-offset-2"
            >
              Try again
            </button>
          </span>
        </div>
      )}

      {/* ── Stats cards ── */}
      {loading ? (
        <FaqStatsSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Total FAQs */}
          <Card className="flex items-center gap-4 p-5 border-zinc-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
              <HelpCircle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Total FAQs
              </p>
              <p className="text-2xl font-bold text-zinc-900">{totalFaqs}</p>
            </div>
          </Card>

          {/* Categories */}
          <Card className="flex items-center gap-4 p-5 border-zinc-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
              <BookOpen className="h-6 w-6 text-sky-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Categories
              </p>
              <p className="text-2xl font-bold text-zinc-900">
                {contentCategories.length}
              </p>
            </div>
          </Card>

          {/* Currently shown */}
          <Card className="flex items-center gap-4 p-5 border-zinc-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Showing
              </p>
              <p className="text-2xl font-bold text-zinc-900">{faqs.length}</p>
            </div>
          </Card>
        </div>
      )}

      {/* ── Category tabs ── */}
      {loading ? (
        <FaqTabsSkeleton />
      ) : (
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${getCategoryStyle(cat.key, activeCategory === cat.key)}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* ── FAQ list ── */}
      {loading ? (
        <FaqListSkeleton />
      ) : (
        <FaqList faqs={faqs} activeCategory={activeCategory} />
      )}
    </div>
  );
}