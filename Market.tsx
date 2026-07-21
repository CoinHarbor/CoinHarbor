"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { market } from "@/constants/market";

export default function Market() {
  return (
    <section id="market" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Live Market"
          title="Major Digital Assets"
          description="Monitor leading cryptocurrencies that form the foundation of many long-term digital asset investment strategies."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {market.map((coin, index) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    {coin.symbol}
                  </h3>

                  <p className="text-slate-400">
                    {coin.name}
                  </p>
                </div>

                {coin.positive ? (
                  <TrendingUp className="text-emerald-400" />
                ) : (
                  <TrendingDown className="text-red-400" />
                )}
              </div>

              <div className="mt-8">
                <p className="text-3xl font-bold">
                  {coin.price}
                </p>

                <p
                  className={`mt-2 font-semibold ${
                    coin.positive
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.change}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}