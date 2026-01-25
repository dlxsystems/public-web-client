"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 820);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The landing page hero is dark (video), so we want white text there.
  // Everywhere else (scrolled, or other pages) the background is light.
  const isHomePage = pathname === "/";
  const isLightMode = !isHomePage || isScrolled;

  const textColor = isLightMode ? "text-black" : "text-white";
  const navLinks = [
    { name: "Expertise", href: "/#expertise" },
    { name: "Work", href: "/#work" },
    { name: "Insights", href: "/#insights" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-500 px-10 py-4 md:py-9 md:px-32">
      <div
        className={`mx-auto transition-all duration-500 rounded-full border border-black/5 flex items-center justify-between p-3 md:p-4 ${
          isScrolled
            ? "bg-white/30 backdrop-blur-xl shadow-3xl shadow-black/20 border-black/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className="relative h-8 w-20 ml-2 md:w-32">
          <Image
            src="/assets/images/logo-full.png"
            alt="dlx systems"
            fill
            className="object-contain transition-all duration-500"
            sizes="150px"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[14px] font-mono font-medium uppercase tracking-[0.2em] transition-colors ${textColor} hover:text-(--primary)`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`${
              isLightMode
                ? "bg-(--primary) text-white"
                : "bg-white text-(--primary)"
            } text-[14px] font-mono font-medium uppercase tracking-widest px-5 py-2.5 rounded-full hover:opacity-90 transition-all`}
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${textColor} hover:opacity-70`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <IconMenu2 size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-0 z-60 p-6 bg-white flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="relative h-8 w-24">
                <Image
                  src="/assets/images/logo-full.png"
                  alt="dlx systems"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <button
                className="p-2 text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <IconX size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-5xl font-semibold tracking-tighter hover:italic transition-all text-black"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-(--primary) text-white text-center text-sm font-mono uppercase tracking-widest py-5 rounded-2xl mt-8"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-auto pt-10 border-t border-black/5 text-center">
              <p className="text-xs text-black/40 font-mono tracking-widest uppercase">
                Clean Architecture. Thoughtful Engineering.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
