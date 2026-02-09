"use client"; // Needed because we use fetch and state for interactivity

import { useState } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-blue-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* LEFT: Google Maps */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              title="Salon Location"
              width="100%"
              height="100%"
              className="min-h-[500px] w-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=May+Nails+Spa+North+Easton+MA&output=embed"
            ></iframe>
          </div>

          {/* RIGHT: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-slate-200">
              Ready to book your appointment? Send us a message and we’ll get
              back to you shortly.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="mt-4 space-y-6"
            >
              {/* Hidden inputs required for Netlify detection */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="subject" value="New Website Contact Submission" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border-0 border-b-1 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg border-0 border-b-1 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border-0 border-b-1 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  required
                  className="w-full rounded-lg border-0 border-b-1 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
                ></textarea>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  className="rounded-lg bg-amber-300 px-8 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-500"
                >
                  Send Message
                </button>

                {status === "success" && (
                  <p className="text-green-400 font-medium">Message sent!</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
