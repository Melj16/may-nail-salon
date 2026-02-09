export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-blue-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
        <div className="mx-auto max-w-2xl text-center rounded-xl overflow-hidden h-100">
          <img src="/about.webp" alt="About Us" className="w-full h-full object-contain" />
        </div>
        <div className="mx-auto max-w-2xl">
          <h3 className="text-xl font-bold text-amber-300 sm:text-xl">
            Get to know
          </h3>
          <h2 className="text-3xl font-bold text-amber-500 sm:text-4xl">
            May Nails Spa
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            <strong>May Nails Spa</strong> is a haven of relaxation and serenity, where you can truly rejuvenate and be pampered from tip to toe.
          </p>
          <p className="mt-4 text-lg text-slate-200">
            We are dedicated to providing the best experience for each guest through our exceptional service and technical excellence. 
            We will go the extra mile to accomplish the mission with passion, utmost professionalism, and courtesy.
          </p>
          <p className="mt-4 text-lg text-slate-200">
            Our nail technicians are always attuned, friendly, and responsive to all your needs. 
            We only use top quality products and follow rigorous sterilization and sanitizing procedures 
            so that your health can never be compromised.
          </p>
        </div>
      </div>
    </section>
  );
}
