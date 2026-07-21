import { CryptoAsset } from "@/types/crypto";

export async function getCryptoPrices(): Promise<CryptoAsset[]> {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple,binancecoin",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch crypto prices.");
  }

  return response.json();
}