import { motion } from "motion/react";
import { ArrowRight, Shield, Clock, Globe, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-32 bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />
        
        {/* Glow effects */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-hover/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-brand/10 border border-brand/20 text-brand-light text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-brand/5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(74,93,110,0.8)]" />
              <span>Premium Shipping & Logistics</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Logistics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-white">
                Redefined.
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed font-medium">
              JWFB FREIGHT BROKERAGE LLC is your trusted partner for seamless logistics. 
              We deliver reliability across every mile with precision, care, and industry-leading expertise.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/book"
              className="group bg-brand hover:bg-brand-hover text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center space-x-4 transition-all transform hover:scale-[1.03] active:scale-95 shadow-[0_20px_50px_-15px_rgba(14,27,47,0.4)]"
            >
              <span>Get a Quote Now</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80"
              alt="Freight Logistics"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-brand-hover/20 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
