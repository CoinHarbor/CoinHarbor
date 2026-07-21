"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
  id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
            Trusted Investment & Financial Solutions
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Grow Your Wealth With
            <span className="block text-emerald-400">Confidence.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            CoinHarbor Capital provides modern investment strategies,
            portfolio management, and financial insights to help individuals
            and businesses achieve long-term financial success.
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Trusted Financial Advisors</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Transparent Investment Plans</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Secure Portfolio Management</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-emerald-400">$500M+</h3>
              <p className="mt-2 text-slate-400">Assets Managed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">10K+</h3>
              <p className="mt-2 text-slate-400">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">15+</h3>
              <p className="mt-2 text-slate-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-400">98%</h3>
              <p className="mt-2 text-slate-400">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}