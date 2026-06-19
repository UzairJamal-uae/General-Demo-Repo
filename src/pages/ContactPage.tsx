import ContactForm from "@/src/components/ContactForm";
import Map from "@/src/components/Map";

export default function ContactPage() {
  return (
    <main className="pt-20">
      <div className="bg-black py-24 text-center">
        <h1 className="text-5xl font-black text-white mb-6">Contact Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're here to help. Reach out to our team for any inquiries.
        </p>
      </div>
      <ContactForm />
      <Map />
    </main>
  );
}
