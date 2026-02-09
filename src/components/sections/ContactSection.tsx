export function ContactSection() {
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
              className="mt-4 space-y-6"
            >
              {/* Required hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="subject" value="New Website Contact Submission" />

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border-0 border-b-1 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg border-0 border-b-1 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border-0 border-b-1 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  required
                  className="w-full rounded-lg border-0 border-b-1 bg-slate-900 px-4 py-3 text-white placeholder-slate-400 focus:border-amber-300 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="rounded-lg bg-amber-300 px-8 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
