"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { investmentProducts } from "@/constants/investmentProducts";

export default function InvestmentProducts() {
  return (
    <section
      id="products"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Investment Products"
          title="Bitcoin & Digital Asset Solutions"
          description="Choose an investment strategy that matches your financial goals while gaining exposure to the world's leading digital assets."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {investmentProducts.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl"
              >
                {/* Badge */}
                <div className="absolute right-5 top-5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  {plan.badge}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-500/10 p-4">
                  <Icon
                    size={34}
                    className="text-emerald-400"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold">
                  {plan.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-400">
                  {plan.description}
                </p>

                {/* Details */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <ShieldCheck
                      size={18}
                      className="text-emerald-400"
                    />
                    <span>{plan.risk}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock3
                      size={18}
                      className="text-emerald-400"
                    />
                    <span>{plan.duration}</span>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-slate-500">
                      Minimum Investment
                    </p>

                    <h4 className="text-3xl font-bold text-emerald-400">
                      {plan.minimum}
                    </h4>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-8">
                  <Button>
                    Learn More
                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}