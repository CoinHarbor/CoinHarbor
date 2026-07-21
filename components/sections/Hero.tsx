"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";

export default function Hero() {
  const { prices } = useCryptoPrices();

  const bitcoin = prices.find(
    (coin) => coin.id === "bitcoin"
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pt-28 pb-20 lg:min-h-screen lg:grid-cols-2">
        {/* LEFT SIDE */}
       <motion.div
  className="relative z-20"
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
            Trusted Bitcoin & Digital Asset Investment Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Grow Your
            <span className="block text-emerald-400">
              Crypto Wealth
            </span>
            With Confidence
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            CoinHarbor Capital helps investors grow wealth through
            professionally managed Bitcoin and cryptocurrency investment
            strategies backed by institutional-grade security and modern
            portfolio management.
          </p>

          {/* Live BTC */}
          <div className="mt-10 inline-flex rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6 backdrop-blur-xl">
            <div>
              <p className="text-sm text-slate-400">
                Live Bitcoin Price
              </p>

              <h2 className="mt-2 text-4xl font-bold text-emerald-400">
                {bitcoin
                  ? `$${bitcoin.current_price.toLocaleString()}`
                  : "Loading..."}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Updated every 30 seconds
              </p>
            </div>
          </div>

          {/* Trust */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              Institutional Security
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              Bitcoin Specialists
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              Global Investors
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Start Investing
            </Button>

            <Button variant="secondary">
              View Markets
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-emerald-400">
                $500M+
              </h3>

              <p className="mt-2 text-slate-400">
                Assets Managed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">
                10K+
              </h3>

              <p className="mt-2 text-slate-400">
                Investors
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">
                15+
              </h3>

              <p className="mt-2 text-slate-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">
                98%
              </h3>

              <p className="mt-2 text-slate-400">
                Satisfaction
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold">
            Live Bitcoin Dashboard
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex justify-between">
              <span className="text-slate-400">
                Bitcoin Price
              </span>

              <span className="text-2xl font-bold text-emerald-400">
                {bitcoin
                  ? `$${bitcoin.current_price.toLocaleString()}`
                  : "..."}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Assets Managed
              </span>

              <span>$500M+</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Active Investors
              </span>

              <span>10,000+</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Investment Plans
              </span>

              <span>4</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Client Satisfaction
              </span>

              <span>98%</span>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 p-6">
            <p className="text-sm text-slate-400">
              Market Status
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span>Bitcoin Market</span>

              <span className="font-semibold text-green-400">
                LIVE
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-4/5 rounded-full bg-emerald-500" />
            </div>

            <p className="mt-3 text-sm text-slate-400">
              Live market data provided by CoinGecko API.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}