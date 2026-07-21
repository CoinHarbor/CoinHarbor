import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple,binancecoin",
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch crypto prices.");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        error: "Unable to fetch market data.",
      },
      {
        status: 500,
      }
    );
  }
}