import { motion } from "motion/react";
import { Package, Truck, FileText, CreditCard, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/src/lib/utils";

const services = [
  {
    title: "Full Truckload (FTL)",
    description: "Dedicated capacity for your largest shipments with direct, point-to-point delivery across the continental USA.",
    icon: Truck,
    color: "bg-brand",
  },
  {
    title: "Partial Loads (LTL)",
    description: "Cost-effective solutions for smaller shipments. Pay only for the space you use without sacrificing speed.",
    icon: Package,
    color: "bg-brand-accent",
  },
  {
    title: "IFTA Services",
    description: "Comprehensive fuel tax reporting and compliance management to keep your fleet running legally and efficiently.",
    icon: FileText,
    color: "bg-brand/90",
  },
  {
    title: "Factored Loads",
    description: "Accelerate your cash flow with our factoring solutions. Get paid faster and keep your business moving.",
    icon: CreditCard,
    color: "bg-brand",
  },
  {
    title: "Expedited Freight",
    description: "Time-critical delivery solutions for your most urgent cargo. Fast, secure, and monitored 24/7.",
    icon: Zap,
    color: "bg-brand-accent",
  },
  {
    title: "Secure Logistics",
    description: "High-value cargo protection with advanced security protocols and comprehensive insurance coverage.",
    icon: ShieldCheck,
    color: "bg-brand/90",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-sans">Comprehensive Logistics Solutions</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg hover:text-slate-600">
            We offer a wide range of services tailored to meet the unique demands of modern supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:text-slate-900 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-brand/20", service.color)}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h4>
              <p className="text-gray-500 group-hover:text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex items-center text-brand font-bold text-sm">
                <span>Learn More</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Truck className="ml-2 h-4 w-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
