"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-surface-border rounded-2xl border border-surface-border bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-semibold text-ink sm:text-base">
                {item.question}
              </span>
              <span
                className={`flex h-6 w-6 flex-none items-center justify-center rounded-full bg-surface-alt text-ink transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
