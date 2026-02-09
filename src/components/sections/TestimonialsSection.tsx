import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < (rating ?? 5) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-blue-950 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            Hear from our satisfied customers.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="rounded-xl border border-slate-600 bg-slate-800 p-6"
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-slate-200">&ldquo;{testimonial.text}&rdquo;</p>
              <footer className="mt-4 font-medium text-white">
                — {testimonial.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
