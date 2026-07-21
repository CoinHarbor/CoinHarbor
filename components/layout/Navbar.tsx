"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

import { navigation } from "@/constants/navigation";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
  const sections = [
    "home",
    "services",
    "products",
    "security",
    "faq",
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((id) => {
    const section = document.getElementById(id);

    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition ${
  activeSection === link.id
    ? "text-emerald-400"
    : "text-slate-300 hover:text-emerald-400"
}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col gap-5 p-6">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
               className={`transition ${
  activeSection === link.id
    ? "text-emerald-400"
    : "text-slate-300 hover:text-emerald-400"
}`}
              >
                {link.name}
              </Link>
            ))}

            <Button>Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}