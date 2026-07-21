"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { faq } from "@/constants/faq";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our investment platform and services."
        />

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">
                  {item.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-slate-800 px-6 py-5 text-slate-400">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}