import Link from "next/link";
import LogoIcon from "./LogoIcon";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <LogoIcon />

      <div>
        <h1 className="text-xl font-bold text-white">
          CoinHarbor
        </h1>

        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Capital
        </p>
      </div>
    </Link>
  );
}