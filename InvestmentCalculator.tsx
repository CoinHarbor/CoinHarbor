"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { calculator } from "@/constants/calculator";

export default function InvestmentCalculator() {
  const [investment, setInvestment] = useState(
    calculator.defaultInvestment
  );

  const [years, setYears] = useState(
    calculator.defaultYears
  );

  const [rate, setRate] = useState(
    calculator.defaultRate
  );

  const futureValue = useMemo(() => {
    return investment * Math.pow(1 + rate / 100, years);
  }, [investment, years, rate]);

  const profit = futureValue - investment;

  return (
    <section
      id="calculator"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          badge="Investment Calculator"
          title="Estimate Your Bitcoin Investment Growth"
          description="Use this calculator to explore how a hypothetical investment could grow over time. Results are illustrative only and do not guarantee future performance."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">

            <div className="mb-6 flex items-center gap-3">
              <Calculator className="text-emerald-400" />
              <h3 className="text-2xl font-bold">
                Calculator
              </h3>
            </div>

            <label className="mb-2 block">
              Investment Amount ($)
            </label>

            <input
              type="number"
              value={investment}
              onChange={(e) =>
                setInvestment(Number(e.target.value))
              }
              className="mb-6 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-emerald-500"
            />

            <label className="mb-2 block">
              Investment Period (Years)
            </label>

            <input
              type="range"
              min={1}
              max={20}
              value={years}
              onChange={(e) =>
                setYears(Number(e.target.value))
              }
              className="w-full"
            />

            <p className="mb-6 mt-2 text-emerald-400">
              {years} Years
            </p>

            <label className="mb-2 block">
              Estimated Annual Return (%)
            </label>

            <input
              type="range"
              min={1}
              max={25}
              value={rate}
              onChange={(e) =>
                setRate(Number(e.target.value))
              }
              className="w-full"
            />

            <p className="text-emerald-400">
              {rate}%
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-950 to-slate-900 p-8">

            <h3 className="text-2xl font-bold">
              Estimated Results
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-slate-400">
                  Estimated Portfolio Value
                </p>

                <h2 className="mt-2 text-5xl font-bold text-emerald-400">
                  $
                  {futureValue.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </h2>
              </div>

              <div>
                <p className="text-slate-400">
                  Estimated Profit
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  $
                  {profit.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </h3>
              </div>

              <Button className="mt-8 w-full">
                Start Investing
              </Button>

              <p className="text-sm text-slate-500">
                This calculator provides hypothetical projections for educational purposes and is not financial advice.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}