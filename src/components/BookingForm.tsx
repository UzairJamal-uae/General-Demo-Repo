import { useForm } from "react-hook-form";
import React from "react";
import { Truck, MapPin, Calendar, Package, ArrowRight, Info } from "lucide-react";
import { motion } from "motion/react";

export default function BookingForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Booking request received! Our dispatch team will contact you shortly with a quote.");
  };

  return (
    <section className="py-24 bg-white min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Fast & Reliable</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6 font-sans">Book Your Shipment</h3>
          <p className="text-gray-500 font-medium">Fill out the form below to request a quote and schedule your freight.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Route Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-brand">
                <div className="bg-brand/10 p-2 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <h4 className="font-black uppercase tracking-widest text-xs">Route Information</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Pickup Location</label>
                  <input {...register("pickup", { required: true })} className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 placeholder-gray-400 font-medium transition-all" placeholder="City, State or Zip" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Delivery Location</label>
                  <input {...register("delivery", { required: true })} className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 placeholder-gray-400 font-medium transition-all" placeholder="City, State or Zip" />
                </div>
              </div>
            </div>

            {/* Cargo Info */}
            <div className="space-y-6 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-brand">
                <div className="bg-brand/10 p-2 rounded-lg">
                  <Package className="h-5 w-5" />
                </div>
                <h4 className="font-black uppercase tracking-widest text-xs">Cargo Details</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Equipment Type</label>
                  <div className="relative">
                    <select {...register("equipment")} className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 appearance-none font-medium transition-all cursor-pointer">
                      <option>Dry Van</option>
                      <option>Reefer</option>
                      <option>Flatbed</option>
                      <option>Step Deck</option>
                      <option>Box Truck</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Weight (lbs)</label>
                  <input {...register("weight")} type="number" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 placeholder-gray-400 font-medium transition-all" placeholder="e.g. 40000" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Pickup Date</label>
                  <input {...register("date")} type="date" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 font-medium transition-all" />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-brand">
                <div className="bg-brand/10 p-2 rounded-lg">
                  <Info className="h-5 w-5" />
                </div>
                <h4 className="font-black uppercase tracking-widest text-xs">Contact Information</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Company Name</label>
                  <input {...register("companyName")} className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 placeholder-gray-400 font-medium transition-all" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input {...register("phone")} className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand text-slate-900 placeholder-gray-400 font-medium transition-all" placeholder="(000) 000-0000" />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand hover:bg-brand-hover text-white font-black py-6 rounded-2xl shadow-xl shadow-brand/20 transition-all flex items-center justify-center space-x-3 group"
            >
              <span>Submit Booking Request</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 group hover:bg-white transition-all hover:shadow-sm">
            <h5 className="font-black text-brand mb-2 uppercase tracking-widest text-xs">Instant Quotes</h5>
            <p className="text-sm text-gray-500 font-medium animate-none">Get pricing in minutes after submission.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 group hover:bg-white transition-all hover:shadow-sm">
            <h5 className="font-black text-brand mb-2 uppercase tracking-widest text-xs">Vetted Carriers</h5>
            <p className="text-sm text-gray-500 font-medium animate-none">Only top-rated carriers handle your cargo.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 group hover:bg-white transition-all hover:shadow-sm">
            <h5 className="font-black text-brand mb-2 uppercase tracking-widest text-xs">Full Visibility</h5>
            <p className="text-sm text-gray-500 font-medium animate-none">Track your load from pickup to delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
