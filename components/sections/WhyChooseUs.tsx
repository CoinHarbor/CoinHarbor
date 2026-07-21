"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  ShieldCheck,
  TrendingUp,
  Lock,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Regulated Investment Practices",
    description:
      "We follow industry best practices with transparency, compliance, and investor protection.",
  },
  {
    icon: TrendingUp,
    title: "Professional Portfolio Management",
    description:
      "Our investment strategies are designed to maximize long-term returns while managing risk.",
  },
  {
    icon: Lock,
    title: "Institutional-Grade Security",
    description:
      "Digital assets are protected using cold storage, encryption, and multi-layer security.",
  },
  {
    icon: Globe,
    title: "Global Market Access",
    description:
      "Gain exposure to Bitcoin and leading digital assets through diversified investment solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Why Choose Us"
          title="Built for Long-Term Crypto Investors"
          description="CoinHarbor Capital combines technology, experience, and institutional-grade security to help investors confidently grow digital wealth."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-emerald-500 hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-500/10 p-4">
                  <Icon
                    className="text-emerald-400"
                    size={34}
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}