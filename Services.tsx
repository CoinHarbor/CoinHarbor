"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  LineChart,
  ShieldCheck,
  Landmark,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

import { services } from "@/constants/services";
  

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            badge="Our Services"
            title="Financial Solutions Built Around You"
            description="We combine expertise, technology, and market insight to deliver financial services that help you build, protect, and grow your wealth."
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-emerald-500/10 p-4">
                  <Icon
                    className="text-emerald-400"
                    size={30}
                  />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}