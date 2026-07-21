import {
  Coins,
  Wallet,
  Building2,
  TrendingUp,
} from "lucide-react";

export const investmentProducts = [
  {
    title: "Bitcoin Growth Plan",
    description:
      "A long-term Bitcoin accumulation strategy designed for steady wealth creation.",
    risk: "Moderate",
    duration: "Long Term",
    minimum: "$500",
    badge: "Most Popular",
    icon: Coins,
  },
  {
    title: "Digital Asset Portfolio",
    description:
      "A diversified portfolio including Bitcoin, Ethereum, Solana and other carefully selected assets.",
    risk: "Balanced",
    duration: "Flexible",
    minimum: "$1,000",
    badge: "Diversified",
    icon: Wallet,
  },
  {
    title: "Institutional Bitcoin",
    description:
      "Professional Bitcoin investment solutions for businesses and high-net-worth clients.",
    risk: "Professional",
    duration: "Custom",
    minimum: "$25,000",
    badge: "Enterprise",
    icon: Building2,
  },
  {
    title: "Crypto Wealth Management",
    description:
      "A fully managed crypto investment strategy guided by experienced professionals.",
    risk: "Managed",
    duration: "Flexible",
    minimum: "$5,000",
    badge: "Premium",
    icon: TrendingUp,
  },
];