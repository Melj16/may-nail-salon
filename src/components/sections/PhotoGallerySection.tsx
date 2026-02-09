import { GALLERY_IMAGES } from "@/lib/constants";

export function PhotoGallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-transparent py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-300 sm:text-4xl">
            Photo Gallery
          </h2>
          <p className="mt-4 text-lg text-slate-200 font-semibold">
            A glimpse of our work and atmosphere.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg"
              role="img"
              aria-label={image.alt}
            >
              {/* Add actual images to public/gallery/ and use next/image */}
              <img src={image.src} alt="About Us" className="object-fill" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
