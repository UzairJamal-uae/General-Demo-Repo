import { motion } from "motion/react";
import { Shield, Clock, Globe, BarChart3, Users, Award } from "lucide-react";

const reasons = [
  {
    title: "Unmatched Reliability",
    description: "With a 99% on-time delivery rate, we ensure your cargo reaches its destination safely and on schedule.",
    icon: Shield,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to provide real-time updates and resolve any issues.",
    icon: Clock,
  },
  {
    title: "Nationwide Network",
    description: "Access to a vast network of vetted carriers across all 50 states, ensuring capacity when you need it.",
    icon: Globe,
  },
  {
    title: "Advanced Technology",
    description: "Real-time tracking, digital load boards, and performance analytics for complete supply chain visibility.",
    icon: BarChart3,
  },
  {
    title: "Expert Team",
    description: "Over 2 years of industry-leading experience in handling diverse freight requirements.",
    icon: Award,
  },
  {
    title: "Carrier Partnerships",
    description: "We build long-term relationships with our carriers, ensuring consistent quality and service.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Our Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Why Choose JWFB Freight Brokerage?</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We combine industry expertise with high-performance standards to deliver superior logistics solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-6 group"
            >
              <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 shrink-0 group-hover:border-brand/30 group-hover:shadow-xl group-hover:shadow-brand/5 transition-all">
                <reason.icon className="h-8 w-8 text-brand" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900">{reason.title}</h4>
                <p className="text-gray-500 leading-relaxed group-hover:text-slate-600 transition-colors">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
