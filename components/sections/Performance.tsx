"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  {
    value: "$500M+",
    title: "Assets Under Management",
  },
  {
    value: "10,000+",
    title: "Active Investors",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
  },
  {
    value: "15+",
    title: "Years Experience",
  },
];

export default function Performance() {
  return (
    <section
      className="bg-slate-900 py-24 text-white"
      id="performance"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Performance"
          title="Delivering Consistent Results"
          description="Our disciplined investment approach combines market expertise, Bitcoin-focused strategies, and institutional risk management."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500"
            >
              <h3 className="text-5xl font-bold text-emerald-400">
                {stat.value}
              </h3>

              <p className="mt-4 text-slate-400">
                {stat.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}