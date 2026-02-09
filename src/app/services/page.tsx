import { ServicesPageContent, ScrollToHash } from "@/components";

export const metadata = {
  title: "Services | May Nail Spa",
  description: "Our nail care services: manicures, pedicures, gel nails, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollToHash />
      <ServicesPageContent />
    </>
  );
}
