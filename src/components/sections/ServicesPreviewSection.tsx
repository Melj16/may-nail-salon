import Link from "next/link";
import { SERVICES } from "@/lib/constants";

const SERVICE_GRADIENTS: Record<string, string> = {
  manicure: "from-rose-200 to-pink-300",
  pedicure: "from-violet-200 to-purple-300",
  "gel-nails": "from-amber-200 to-orange-300",
};

export function ServicesPreviewSection() {
  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-200 font-semibold">
            Discover our wide range of treatments. Click each service to learn more.
          </p>
        </div>

        <div className="mt-12 grid gap-y-8 gap-x-30 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.id} className="group">
              <Link
                href={`/services#${service.slug}`}
                className="block overflow-hidden"
              >
                {/* Image Container */}
                <div className="overflow-hidden rounded-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-in-out transform group-hover:scale-95"
                  />
                </div>

                {/* Text */}
                <h3 className="mt-3 text-center text-lg font-semibold text-white transition-all duration-500 relative">
                  <span className="relative z-10 text-slate-200 transition-colors duration-300 group-hover:text-amber-300">
                    {service.title}
                  </span>
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
