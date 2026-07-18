"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  Users,
  BarChart3,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/constants/features";


export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Why Choose Us"
          title="Financial Confidence Starts Here"
          description="Combining technology, expertise, and transparency to help you make smarter financial decisions."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="grid gap-6">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:border-emerald-500 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-5">

                    <div className="rounded-xl bg-emerald-500/10 p-4">
                      <Icon
                        className="text-emerald-400"
                        size={28}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-slate-400">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 p-12"
          >
            <div className="text-center">

              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-emerald-500/10">

                <BarChart3
                  size={90}
                  className="text-emerald-400"
                />

              </div>

              <h3 className="mt-8 text-3xl font-bold">
                Smarter Investing
              </h3>

              <p className="mt-4 max-w-md text-slate-400">
                Innovative investment strategies designed to grow and preserve your wealth over the long term.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}