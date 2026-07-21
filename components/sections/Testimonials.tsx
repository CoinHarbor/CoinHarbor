"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          description="Hear from investors who value our commitment to transparency, security, and long-term financial growth."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8"
            >
              <Quote
                size={36}
                className="mb-6 text-emerald-400"
              />

              <p className="leading-8 text-slate-300">
                "{item.comment}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}