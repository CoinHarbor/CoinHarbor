"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";

export default function InvestmentCalculator() {
  const { prices } = useCryptoPrices();

  const bitcoin = prices.find((coin) => coin.id === "bitcoin");

  const [amount, setAmount] = useState(1000);

  const btc =
    bitcoin && bitcoin.current_price
      ? amount / bitcoin.current_price
      : 0;

  return (
    <section
      id="calculator"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">

        <SectionTitle
          badge="Investment Calculator"
          title="Estimate Your Bitcoin Investment"
          description="See how much Bitcoin your investment could purchase based on the current live market price."
        />

        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-10">

          <label className="text-lg font-semibold">
            Investment Amount (USD)
          </label>

          <input
            type="number"
            value={amount}
            min={100}
            onChange={(e) =>
              setAmount(Number(e.target.value))
            }
            className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-2xl outline-none focus:border-emerald-500"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="text-slate-400">
                Current Bitcoin Price
              </p>

              <h3 className="mt-3 text-4xl font-bold text-emerald-400">
                {bitcoin
                  ? `$${bitcoin.current_price.toLocaleString()}`
                  : "..."}
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="text-slate-400">
                Estimated Bitcoin
              </p>

              <h3 className="mt-3 text-4xl font-bold">
                {btc.toFixed(6)} BTC
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}