"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircleQuestion } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { FaqItem, FaqCategoryKey } from "@/redux/features/faq/faqApi";

// ── Category badge styles ───────────────────────────────────────────────────────
const CATEGORY_STYLES: Record<string, string> = {
  billing: "bg-amber-50 text-amber-700 border border-amber-200",
  features: "bg-sky-50 text-sky-700 border border-sky-200",
  privacy: "bg-purple-50 text-purple-700 border border-purple-200",
  getting_started: "bg-emerald-50 text-emerald-700 border border-emerald-200",
};

function getCategoryStyle(category: string) {
  return CATEGORY_STYLES[category] ?? "bg-zinc-100 text-zinc-600 border border-zinc-200";
}

// ── Props ───────────────────────────────────────────────────────────────────────
interface Props {
  faqs: FaqItem[];
  activeCategory: FaqCategoryKey;
}

// ── Component ───────────────────────────────────────────────────────────────────
export default function FaqList({ faqs, activeCategory }: Props) {
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-white py-20 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
          <MessageCircleQuestion className="h-8 w-8 text-amber-500" />
        </div>
        <p className="text-base font-semibold text-zinc-700">No FAQs found</p>
        <p className="mt-1 text-sm text-zinc-400">
          No questions in this category yet. Add one!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filtered.map((faq, index) => {
        const isOpen = openId === faq.id;
        return (
          <Card
            key={faq.id}
            className="overflow-hidden border border-zinc-200/80 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <CardContent className="p-0">
              <button
                className="flex w-full items-start justify-between gap-4 p-5 text-left cursor-pointer"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
              >
                {/* Number + Question */}
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-zinc-900 group-hover:text-amber-700 leading-snug">
                    {faq.question}
                  </p>
                </div>

                {/* Badge + Chevron */}
                <div className="flex flex-shrink-0 items-center gap-2">
                  <span
                    className={`hidden sm:inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${getCategoryStyle(faq.category)}`}
                  >
                    {faq.category_display}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-amber-600" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-zinc-400" />
                  )}
                </div>
              </button>

              {/* Answer accordion */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="border-t border-zinc-100 bg-zinc-50/60 px-5 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
