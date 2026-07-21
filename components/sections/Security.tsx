"use client";

import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import { securityFeatures } from "@/constants/security";

export default function Security() {
  return (
    <section
      id="security"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Security"
          title="Protecting Your Digital Assets"
          description="Security is built into every aspect of CoinHarbor Capital. We focus on safeguarding client accounts and digital assets through multiple layers of protection."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {securityFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-500/10 p-4">
                  <Icon
                    size={34}
                    className="text-emerald-400"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}