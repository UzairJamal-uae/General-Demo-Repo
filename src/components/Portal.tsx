import { motion } from "motion/react";
import { Lock, ArrowRight, ShieldCheck, UserCheck } from "lucide-react";

interface PortalProps {
  type: "Shipper" | "Carrier";
}

export default function Portal({ type }: PortalProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand-accent text-xs font-black uppercase tracking-widest">
            <Lock className="h-3 w-3" />
            <span>Secure Access</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            {type} <br />
            <span className="text-brand">Portal.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Manage your shipments, documents, and payments in one centralized dashboard. 
            Experience the power of JWFB Freight Brokerage's digital ecosystem.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-slate-800">
              <div className="bg-brand/10 p-2.5 rounded-xl">
                <ShieldCheck className="h-5 w-5 text-brand" />
              </div>
              <span className="font-bold">Bank-grade security encryption</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-800">
              <div className="bg-brand/10 p-2.5 rounded-xl">
                <UserCheck className="h-5 w-5 text-brand" />
              </div>
              <span className="font-bold">Dedicated support manager</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Welcome Back</h3>
            <p className="text-gray-400 text-sm font-medium">Please enter your credentials to access the {type.toLowerCase()} portal.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 placeholder-gray-400 font-medium transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs text-brand-accent font-black hover:underline uppercase tracking-widest">Forgot?</a>
              </div>
              <input 
                type="password" 
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 placeholder-gray-400 font-medium transition-all"
                placeholder="••••••••"
              />
            </div>

            <button className="w-full bg-brand hover:bg-brand-hover text-white font-black py-5 rounded-2xl shadow-xl shadow-brand/20 transition-all flex items-center justify-center space-x-3 group">
              <span>Login to Portal</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center pt-6">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                Don't have an account? <br />
                <a href="#" className="text-brand-accent font-black hover:underline mt-2 inline-block">Apply for Onboarding</a>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
