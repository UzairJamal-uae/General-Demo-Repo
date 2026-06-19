import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "On-Time Delivery", value: "99%", icon: CheckCircle2 },
    { label: "Active Carriers", value: "500+", icon: Zap },
    { label: "Live Support", value: "24/7", icon: ShieldCheck },
  ];

  return (
    <section className="bg-slate-50 py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center space-x-6 p-8 rounded-3xl bg-white shadow-sm border border-gray-100"
            >
              <div className="bg-brand p-4 rounded-2xl shadow-lg shadow-brand/20">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900 leading-none mb-1">{stat.value}</p>
                <p className="text-[10px] text-brand uppercase tracking-widest font-black">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
