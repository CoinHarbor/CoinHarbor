"use client";

import { useCryptoPrices } from "@/hooks/useCryptoPrices";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Market() {
  const { prices, loading } = useCryptoPrices();

  return (
    <section
      id="market"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Live Market"
          title="Real-Time Cryptocurrency Prices"
          description="Live market prices powered by our crypto market API."
        />

        {loading ? (
          <p className="text-center text-slate-400">
            Loading market data...
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {prices.map((coin) => (
              <div
                key={coin.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-emerald-500 hover:-translate-y-2"
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="h-12 w-12"
                />

                <h3 className="mt-4 text-xl font-bold">
                  {coin.name}
                </h3>

                <p className="mt-2 text-3xl font-bold text-emerald-400">
                  $
                  {coin.current_price.toLocaleString()}
                </p>

                <p
                  className={`mt-2 font-semibold ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            ))}

          </div>
        )}
      </div>
    </section>
  );
}