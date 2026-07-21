import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import Logo from "@/components/ui/Logo";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Risk Disclosure", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Logo />

            <p className="mt-6 text-sm leading-7 text-slate-400">
              CoinHarbor Capital provides modern cryptocurrency investment
              solutions with a focus on long-term wealth creation, transparency,
              and security.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Investment Products
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Bitcoin Growth Plan</li>
              <li>Digital Asset Portfolio</li>
              <li>Institutional Bitcoin</li>
              <li>Crypto Wealth Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">
              <p>support@coinharborcapital.com</p>
              <p>+1 (000) 000-0000</p>
              <p>Available 24/7</p>
            </div>

            <div className="mt-6 flex gap-4">
  <Globe className="cursor-pointer transition hover:text-emerald-400" />
  <Mail className="cursor-pointer transition hover:text-emerald-400" />
  <Phone className="cursor-pointer transition hover:text-emerald-400" />
  <MessageCircle className="cursor-pointer transition hover:text-emerald-400" />
</div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} CoinHarbor Capital. All rights reserved.
          </p>

          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}