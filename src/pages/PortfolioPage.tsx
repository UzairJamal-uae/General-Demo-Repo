import CaseStudies from "@/src/components/CaseStudies";
import PerformanceGraphs from "@/src/components/PerformanceGraphs";
import { motion } from "motion/react";

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A track record of reliability and excellence in nationwide freight management.
          </motion.p>
        </div>
      </section>

      <PerformanceGraphs />
      <CaseStudies />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">Our Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Loads", value: "15,000+" },
              { label: "Miles Covered", value: "2M+" },
              { label: "Happy Shippers", value: "200+" },
              { label: "Carrier Partners", value: "500+" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gray-900 rounded-3xl shadow-sm border border-white/5">
                <p className="text-4xl font-black text-gray-500 mb-2">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
