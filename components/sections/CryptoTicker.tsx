"use client";

import { useCryptoPrices } from "@/hooks/useCryptoPrices";

export default function CryptoTicker() {
  const { prices } = useCryptoPrices();

  if (!prices.length) return null;

  const tickerData = [...prices, ...prices];

  return (
    <section className="overflow-hidden border-y border-slate-800 bg-slate-950 py-3">
      <div className="ticker flex whitespace-nowrap">

        {tickerData.map((coin, index) => (
          <div
            key={`${coin.id}-${index}`}
            className="mx-8 flex items-center gap-3"
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="h-7 w-7"
            />

            <span className="font-semibold">
              {coin.symbol?.toUpperCase() ?? coin.id.toUpperCase()}
            </span>

            <span className="text-emerald-400">
              ${coin.current_price.toLocaleString()}
            </span>

            <span
              className={
                coin.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}