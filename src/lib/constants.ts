import type { GalleryImage, NavLink, Service, Testimonial, Treatment } from "@/types";

export const SITE_NAME = "May Nails Spa";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const PEDICURE_TREATMENTS: Treatment[] = [
  {
    id: "1",
    title: "Basic Pedicure",
    description: `The Basic Pedicure begins with a relaxing <span class="text-amber-300">Foot Soak</span>, \
    followed by nail trimming and shaping, and cuticle care. It finishes with a soothing \
    <span class="text-amber-300">5-minute massage with Lotion</span> and your choice of polish.`,
    price: "$35",
  },
  {
    id: "2",
    title: "Deluxe Pedicure",
    description: `The Deluxe Pedicure offers complete foot care and relaxation. It includes nail trimming, shaping, \
    and cuticle care, followed by a <span class="text-amber-300">NaturalSpa Pedi Soak</span> to soften the skin. \
    A <span class="text-amber-300">Collagen Sugar Scrub</span> exfoliates, and a <span class="text-amber-300">Pedi Mask</span> \
    deeply hydrates. Enjoy a <span class="text-amber-300">15-minute massage with Collagen Massage Cream</span>, then finish with \
    a polish application for beautifully refreshed feet.\

    <p class="text-amber-300 underline font-semibold">Choose any scent of your choice!</p>`,
    price: "$55",
  },
  {
    id: "3",
    title: "​May Pedicure",
    description: `The May Pedicure provides an elevated spa experience with everything included in the Deluxe Pedicure—nail \
    trimming, shaping, and cuticle care—followed by a <span class="text-amber-300">NaturalSpa Pedi Soak</span>, \
    <span class="text-amber-300">Collagen Sugar Scrub</span>, and a deeply hydrating <span class="text-amber-300">Pedi Mask</span>. \
    This service is enhanced with a warm <span class="text-amber-300">paraffin wax treatment</span> for extra softness and rejuvenation. \
    Enjoy a luxurious <span class="text-amber-300">20-minute massage using Collagen Massage Cream</span> while a candle is lit, \
    then finish with a polish application for beautifully renewed feet.\
    
    <p class="text-amber-300 underline font-semibold">Choose any scent of your choice!</p>`,
    price: "$70",
  },
];

export const MANICURE_TREATMENTS: Treatment[] = [
  {
    id: "1",
    title: "Basic Manicure",
    price: "$20",
  },
  {
    id: "2",
    title: "Gel Manicure",
    price: "$35",
  },
  {
    id: "3",
    title: "Regular Color Change",
    price: "$15",
  },
  {
    id: "4",
    title: "Gel Color Change",
    price: "$30",
  },
];

export const NAIL_SERVICE_TREATMENT: Treatment[] = [
  {
    id: "1",
    title: "Full Set Acrylic",
    price: "$55+",
  },
  {
    id: "2",
    title: "Fill Acrylic",
    price: "$45",
  },
  {
    id: "3",
    title: "Full Set Builder Gel",
    price: "$65",
  },
  {
    id: "4",
    title: "Fill Builder Gel",
    price: "$55",
  },
  {
    id: "5",
    title: "Dip Powder",
    price: "$50",
  },
  {
    id: "6",
    title: "Dip Tip",
    price: "$55",
  },
];

export const ADD_ON_TREATMENT: Treatment[] = [
  {
    id: "1",
    title: "French",
    price: "$5",
  },
  {
    id: "2",
    title: "One Fix",
    price: "$6",
  },
  {
    id: "3",
    title: "Nail Arts",
    price: "$6+",
  },
  {
    id: "4",
    title: "Gel Take Off",
    price: "$10",
  },
  {
    id: "5",
    title: "Dip Take Off",
    price: "$15",
  },
  {
    id: "6",
    title: "Acrylic Take Off",
    price: "$15",
  },
  {
    id: "7",
    title: "Cat Eye",
    price: "$10",
  },
  {
    id: "8",
    title: "Chrome",
    price: "$10",
  },
  {
    id: "9",
    title: "Special Shape",
    price: "$5",
  },
  {
    id: "10",
    title: "Add Gel Polish",
    price: "$15",
  },
  {
    id: "11",
    title: "Add Paraffin",
    price: "$10",
  },
  {
    id: "12",
    title: "Toe Nail Trim",
    price: "$20",
  },
  {
    id: "13",
    title: "Hand Nail Trim",
    price: "$10",
  },
];

export const WAX_TREATMENT: Treatment[] = [
  {
    id: "1",
    title: "Face",
    price: "$45",
  },
  {
    id: "2",
    title: "Eyebrows",
    price: "$12",
  },
  {
    id: "3",
    title: "Lip",
    price: "$10",
  },
  {
    id: "4",
    title: "Chin",
    price: "$12",
  },
  {
    id: "5",
    title: "Sideburns",
    price: "$15",
  },
  {
    id: "6",
    title: "Arms",
    price: "$45",
  },
  {
    id: "7",
    title: "Underarms",
    price: "$25",
  },
  {
    id: "8",
    title: "Full Legs",
    price: "$80",
  },
  {
    id: "9",
    title: "Lower Legs",
    price: "$45",
  },
  {
    id: "10",
    title: "Upper Legs",
    price: "$45",
  },
  {
    id: "11",
    title: "Toe Nails",
    price: "$12",
  },
  {
    id: "12",
    title: "Bikini Wax",
    price: "$50",
  },
  {
    id: "13",
    title: "Brazilian",
    price: "$70",
  },
];

export const FACIAL_TREATMENT: Treatment[] = [
  {
    id: "1",
    title: "Facial Treatment",
    price: "$60",
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    slug: "pedicure",
    title: "Pedicure",
    image: "/services/pedicure.jpg",
    treatments: PEDICURE_TREATMENTS,
  },
  {
    id: "2",
    slug: "manicure",
    title: "Manicure",
    image: "/services/manicure.jpg",
    treatments: MANICURE_TREATMENTS,
  },
  {
    id: "3",
    slug: "nail-services",
    title: "Nail Services",
    image: "/services/nail-services.jpg",
    treatments: NAIL_SERVICE_TREATMENT,
  },
  {
    id: "4",
    slug: "add-ons",
    title: "Add-ons",
    image: "/services/add-ons.jpg",
    treatments: ADD_ON_TREATMENT,
  },
  {
    id: "5",
    slug: "waxing",
    title: "Waxing",
    image: "/services/waxing.jpg",
    treatments: WAX_TREATMENT,
  },
  {
    id: "6",
    slug: "facial-treatment",
    title: "Facial Treatment",
    image: "/services/facial-treatment.jpg",
    treatments: FACIAL_TREATMENT,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Yosstina S.",
    text: "My 3 friends and I came here for last minute manicures and pedicures. Everyone there was super nice and very \
    accommodating. They didn't rush us or stress out when a one person in our group was a few minutes late. \
    I also love how my nails turned out.",
    rating: 5,
  },
  {
    id: "2",
    name: "Jessica L.",
    text: "This place is absolutely fantastic. I spent so long trying to find somewhere that can do fun \
    designs and that leaves me feeling like I got a service that's worth the money I'm spending. I've never \
    walked away feeling dissatisfied with my nails, or that it wasn't worth the price.",
    rating: 5,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "1", src: "/gallery/1.jpg", alt: "Nail art design" },
  { id: "2", src: "/gallery/2.jpg", alt: "Manicure result" },
  { id: "3", src: "/gallery/3.jpg", alt: "Pedicure setup" },
  { id: "4", src: "/gallery/4.jpg", alt: "Gel nails" },
  { id: "5", src: "/gallery/5.jpg", alt: "Nail art detail" },
  { id: "6", src: "/gallery/6.jpg", alt: "Spa experience" },
  { id: "7", src: "/gallery/7.jpg", alt: "Nail design" },
  { id: "8", src: "/gallery/8.jpg", alt: "Manicure finish" },
  { id: "9", src: "/gallery/9.jpg", alt: "Pedicure treatment" },
  { id: "10", src: "/gallery/10.jpg", alt: "Gel polish" },
];
