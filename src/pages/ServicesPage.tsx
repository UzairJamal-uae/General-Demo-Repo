import Services from "@/src/components/Services";
import WhyChooseUs from "@/src/components/WhyChooseUs";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <div className="bg-black py-24 text-center">
        <h1 className="text-5xl font-black text-white mb-6">Our Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive logistics solutions designed to keep your business moving efficiently.
        </p>
      </div>
      <Services />
      <WhyChooseUs />
    </main>
  );
}
