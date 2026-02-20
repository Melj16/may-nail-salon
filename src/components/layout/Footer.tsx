import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/maynailsspama/", target: "_blank", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/maynailsspama/", target: "_blank", icon: "instagram" },
  { label: "Yelp", href: "https://www.yelp.com/biz/may-nails-spa-north-easton", target: "_blank", icon: "yelp" },
  { label: "Google", href: "https://maps.app.goo.gl/eCvuxTsCGpjxAjZU6", target: "_blank", icon: "google" },
];

function SocialIcon({ icon }: { icon: string }) {
  const className = "h-5 w-5";
  switch (icon) {
    case "facebook":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "yelp":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c1.72-2.55 1.49-5.91-.59-8.1C15.305-.563 12.026-.405 9.41.986L4.898 3.255c-1.02.54-1.092 1.87-.142 2.492l4.256 2.89c.666.45 1.12 1.187 1.253 2.02l.727 5.016c.243 1.675 2.023 2.64 3.42 1.945l3.964-1.964c.67-.33 1.235-.873 1.592-1.563.46-.88.44-1.93-.02-2.805z" />
        </svg>
      );
    case "google":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-900 text-center">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt={SITE_NAME}
                className="h-30 w-auto max-w-[140px] object-contain"
              />
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a href="tel:+15082308899" className="hover:text-white">508-230-8899</a>
              </li>
              <li>
                <a href="mailto:maynailsspama@gmail.com" className="hover:text-white">maynailsspama@gmail.com</a>
              </li>
              <li>503 Foundry St Suite 3</li>
              <li>North Easton, MA 02356</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hours of Operation
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Mon – Fri: 9am – 7pm</li>
              <li>Saturday: 9am – 6pm</li>
              <li>Sunday: 10am – 5pm</li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h4>
            <div className="mt-4 flex flex-wrap gap-3 items-center justify-center">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target={link.target}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 bg-slate-800 text-white transition hover:border-amber-500 hover:bg-slate-700 hover:text-amber-400"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          © {currentYear} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
