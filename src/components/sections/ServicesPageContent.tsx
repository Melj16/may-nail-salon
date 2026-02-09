"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";

export function ServicesPageContent() {
  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // delay between each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, ease: [0.42, 0, 0.58, 1] },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-blue-950">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-amber-300 sm:text-4xl">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-slate-200">
          Discover our range of nail care treatments designed for your comfort
          and style.
        </p>
      </div>

      <div className="mt-16 space-y-24">
        {SERVICES.map((service) => (
          <section key={service.id} id={service.slug} className="scroll-mt-24">
            {/* Image with decorative borders */}
            <div className="relative w-80 mx-auto mb-8">
              <div className="absolute top-0 right-0 w-full h-full rounded-md border-2 border-amber-400 transform translate-x-4 -translate-y-4 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-full rounded-md border-2 border-amber-400 transform -translate-x-4 translate-y-4 pointer-events-none"></div>
              <img
                src={service.image}
                alt={service.title}
                className="relative w-full rounded-md object-cover z-10 transition-transform duration-300 ease-in-out transform hover:scale-95"
              />
            </div>

            {/* Text Content with stagger animation */}
            <motion.div
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-slate-200 sm:text-3xl mt-10"
                variants={itemVariants}
              >
                {service.title}
              </motion.h2>

              {service.treatments?.map((treatment) => (
                <motion.div
                  key={treatment.id}
                  className="mt-5"
                  variants={itemVariants}
                >
                  <div className="flex items-baseline w-full">
                    <p className="text-xl text-slate-200 sm:text-xl font-bold">
                      {treatment.title}
                    </p>
                    <div className="grow border-b border-amber-500 mx-2"></div>
                    <p className="text-xl text-amber-300 sm:text-xl font-bold">
                      {treatment.price}
                    </p>
                  </div>
                  {treatment.description && (
                    <div
                      className="text-slate-200 font-medium text-lg mt-1"
                      dangerouslySetInnerHTML={{ __html: treatment.description }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
