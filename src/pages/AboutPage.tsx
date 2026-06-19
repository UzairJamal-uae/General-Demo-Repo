import WhyChooseUs from "@/src/components/WhyChooseUs";
import Stats from "@/src/components/Stats";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Our Story
          </motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            With over 2 years of dedicated service, REAL LOGISTICS GROUP LLC has evolved from a local vision to a nationwide logistics powerhouse.
          </motion.p>
        </div>
      </section>

      <Stats />

      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white">Driven by Excellence, <br /><span className="text-gray-500">Defined by Trust.</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                REAL LOGISTICS GROUP LLC was built on the principle that logistics should be transparent, reliable, and accessible. We understand that every shipment represents a promise made to your customers, and we take that responsibility seriously.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our team of experts leverages years of industry knowledge to navigate the complexities of the modern supply chain, ensuring your freight moves seamlessly from coast to coast.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80" 
                alt="Freight Logistics" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-gray-500 p-8 rounded-2xl text-black shadow-xl">
                <p className="text-4xl font-black">2+</p>
                <p className="text-xs font-bold uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </main>
  );
}
