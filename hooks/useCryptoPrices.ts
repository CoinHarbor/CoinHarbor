"use client";

import { useEffect, useState } from "react";

export interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export function useCryptoPrices() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const response = await fetch("/api/crypto");

        const data = await response.json();

        setPrices(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPrices();

    const interval = setInterval(fetchPrices, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    prices,
    loading,
  };
}