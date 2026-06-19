import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do you ensure carrier reliability?",
    answer: "We vet every carrier in our network through a rigorous 5-step process, checking safety ratings, insurance validity, and historical performance. This ensures 99% reliability and on-time performance for your freight.",
  },
  {
    question: "How can I track my freight in real-time?",
    answer: "Our advanced tracking system provides real-time updates at every milestone. You'll have access to a dedicated portal and 24/7 support to ensure you always know exactly where your shipment is.",
  },
  {
    question: "Do you handle all compliance and paperwork?",
    answer: "Yes, we manage the entire administrative burden. From IFTA and insurance verification to safety documentation and billing, our team handles the complexities so you can focus on your core business.",
  },
  {
    question: "How do you provide stable pricing in a volatile market?",
    answer: "Leveraging deep market insights and a vast network of 500+ carriers, we negotiate competitive, stable rates. Our scale allows us to buffer against sudden market fluctuations and provide predictable logistics costs.",
  },
  {
    question: "What types of freight do you handle?",
    answer: "We handle a wide range of freight, including dry van, refrigerated, flatbed, and specialized loads. Whether it's a single pallet or a full truckload, we have the capacity and expertise to move it.",
  },
];

export default function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold uppercase tracking-[0.2em] text-xs mb-4">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight font-sans">Shipper & Carrier FAQ</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-brand-accent transition-colors">
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus className="h-6 w-6 text-brand" />
                  ) : (
                    <Plus className="h-6 w-6 text-brand" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-500 text-lg leading-relaxed max-w-3xl font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
