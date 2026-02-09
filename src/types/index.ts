// Shared types for the nail salon website

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  slug: string; // For URL anchors: /services#manicure
  title: string;
  image?: string; // Path to image in public/, e.g. /services/manicure.jpg
  treatments: Treatment[];
}

export interface Treatment {
  id: string;
  title: string;
  description?: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating?: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}
