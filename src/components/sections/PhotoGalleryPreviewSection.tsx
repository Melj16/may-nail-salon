import Link from "next/link";
import { GALLERY_IMAGES } from "@/lib/constants";

const PREVIEW_IMAGES = GALLERY_IMAGES.slice(0, 8);

export function PhotoGalleryPreviewSection() {
  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-400 sm:text-4xl">
            Photo Gallery
          </h2>
          <p className="mt-4 text-lg text-slate-200 font-bold">
            A glimpse of our work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {PREVIEW_IMAGES.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-md"
              role="img"
              aria-label={image.alt}
            >
              <img src={image.src} alt="About Us" className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-95" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="rounded-lg bg-amber-300 px-8 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-500"
          >
            See more →
          </Link>
        </div>
      </div>
    </section>
  );
}
