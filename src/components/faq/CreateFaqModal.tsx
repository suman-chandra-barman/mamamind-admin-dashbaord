"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { Plus, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useCreateFaqMutation,
  type FaqCategoryKey,
  type FaqCategory,
} from "@/redux/features/faq/faqApi";

// ── Category options (excludes "all") ──────────────────────────────────────────
const CONTENT_CATEGORIES: { key: Exclude<FaqCategoryKey, "all">; label: string }[] = [
  { key: "billing", label: "Billing" },
  { key: "features", label: "Features" },
  { key: "privacy", label: "Privacy" },
  { key: "getting_started", label: "Getting Started" },
];

interface Props {
  categories: FaqCategory[];
}

export default function CreateFaqModal({ categories }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] =
    useState<Exclude<FaqCategoryKey, "all">>("billing");

  const [createFaq, { isLoading }] = useCreateFaqMutation();

  // Derive the content categories from the API (exclude "all")
  const contentCats =
    categories.filter((c) => c.key !== "all").length > 0
      ? (categories.filter((c) => c.key !== "all") as {
          key: Exclude<FaqCategoryKey, "all">;
          label: string;
        }[])
      : CONTENT_CATEGORIES;

  const handleClose = () => {
    setIsOpen(false);
    setQuestion("");
    setAnswer("");
    setCategory("billing");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast.error("Question is required.");
      return;
    }
    if (!answer.trim()) {
      toast.error("Answer is required.");
      return;
    }

    const toastId = toast.loading("Creating FAQ...");
    try {
      const response = await createFaq({
        question: question.trim(),
        answer: answer.trim(),
        category,
      }).unwrap();

      if (response.success) {
        toast.update(toastId, {
          render: response.message || "FAQ created successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        handleClose();
      } else {
        toast.update(toastId, {
          render: "Failed to create FAQ.",
          type: "error",
          isLoading: false,
          autoClose: 4000,
        });
      }
    } catch (err: any) {
      toast.update(toastId, {
        render: err?.data?.message || "An error occurred.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
  };

  return (
    <>
      {/* Trigger */}
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-amber-600 hover:bg-amber-700 text-white gap-2 cursor-pointer"
      >
        <Plus className="h-4 w-4" />
        Add FAQ
      </Button>

      {/* Backdrop + Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Dialog */}
          <div className="relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
              <div>
                <h2 className="text-base font-semibold text-zinc-900">
                  Add New FAQ
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Create a new frequently asked question entry.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 p-6">
              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="faq_category" className="text-zinc-700 font-medium">
                  Category
                </Label>
                <select
                  id="faq_category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as Exclude<FaqCategoryKey, "all">)
                  }
                  className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
                  required
                >
                  {contentCats.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Question */}
              <div className="space-y-2">
                <Label htmlFor="faq_question" className="text-zinc-700 font-medium">
                  Question
                </Label>
                <Input
                  id="faq_question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. Can I cancel anytime?"
                  className="bg-zinc-50 border-zinc-200 focus:bg-white"
                  required
                />
              </div>

              {/* Answer */}
              <div className="space-y-2">
                <Label htmlFor="faq_answer" className="text-zinc-700 font-medium">
                  Answer
                </Label>
                <textarea
                  id="faq_answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Provide a clear, helpful answer..."
                  rows={4}
                  className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                  required
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 border-t border-zinc-100 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isLoading}
                  className="border-zinc-200 text-zinc-600 hover:bg-zinc-50 cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-amber-600 hover:bg-amber-700 text-white min-w-[110px] cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create FAQ"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
