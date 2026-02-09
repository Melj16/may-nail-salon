"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [showBanner]);

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {showBanner && (
        <div
          onClick={() => setShowModal(true)}
          className="relative w-full cursor-pointer bg-amber-400 text-black text-center text-sm font-semibold py-2 hover:bg-amber-300 transition"
        >
          🎉 10% OFF for First-Time Customers!

          <button
            onClick={(e) => {
              e.stopPropagation(); // 👈 prevents modal from opening
              setShowBanner(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 font-bold"
          >
            ✕
          </button>
        </div>
      )}
      <header className="border-b border-white/20 bg-black/20 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/logo.png"
              alt="May Nail Spa"
              className="h-14 w-auto max-w-[200px] object-contain sm:h-16 sm:max-w-[220px]"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-lg font-bold transition hover:text-amber-400 ${
                      isActive ? "text-amber-300 underline underline-offset-10" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-white/20 bg-black/30 px-4 py-4 backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-amber-400 ${
                        isActive ? "text-amber-500" : "text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>

      {/* Coupon Popup */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="relative w-[90%] max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
            
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">
              🎉 Welcome!
            </h2>

            <p className="mb-6 text-gray-600">
              Enjoy <span className="font-semibold text-amber-500">10% OFF</span> your first visit at May Nails Spa.
            </p>

            <Link
              href="tel:+15082308899"
              onClick={() => setShowModal(false)}
              className="inline-block rounded-full bg-amber-400 mb-6 px-6 py-3 font-semibold text-black hover:bg-amber-300 transition"
            >
              Call to Book Now!
            </Link>

            <p className="text-xs text-slate-500">
              Note: Coupon is valid for first time customers only. In order to redeem coupon, please show a screenshot of this coupon to the front desk after your appointment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
