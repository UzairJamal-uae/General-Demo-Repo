import { useForm } from "react-hook-form";
import React from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Thank you! Your message has been sent.");
  };

  const company = {
    phone: "(785) 728-7826",
    email: "westj2277@gmail.com",
    address: "310 SHERMAN AVE, GOODLAND, KS 67735",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM MST"
  };

  return (
    <section className="py-24 bg-white text-slate-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Let's Discuss Your Logistics Needs</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Whether you're a shipper looking for capacity or a carrier looking for loads, 
                our team is ready to provide the support you need.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="bg-brand p-4 rounded-2xl shadow-lg shadow-brand/20">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-black text-slate-900 group-hover:text-brand-accent transition-colors uppercase tracking-tight">{company.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-brand p-4 rounded-2xl shadow-lg shadow-brand/20">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-black text-slate-900 group-hover:text-brand-accent transition-colors lowercase tracking-tight">{company.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-brand p-4 rounded-2xl shadow-lg shadow-brand/20">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Our Office</p>
                  <p className="text-xl font-black text-slate-900 group-hover:text-brand-accent transition-colors uppercase tracking-tight">{company.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-brand p-4 rounded-2xl shadow-lg shadow-brand/20">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Business Hours</p>
                  <p className="text-xl font-black text-slate-900 group-hover:text-brand-accent transition-colors uppercase tracking-tight">{company.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-slate-900 placeholder-gray-400 font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-slate-900 placeholder-gray-400 font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Subject</label>
                <select 
                  {...register("subject")}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-slate-900 appearance-none font-medium cursor-pointer"
                >
                  <option>General Inquiry</option>
                  <option>Request a Quote</option>
                  <option>Carrier Onboarding</option>
                  <option>Billing Question</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Message</label>
                <textarea 
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all text-slate-900 placeholder-gray-400 font-medium resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand hover:bg-brand-hover text-white font-black py-5 rounded-2xl shadow-xl shadow-brand/20 transition-all flex items-center justify-center space-x-3 group"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
