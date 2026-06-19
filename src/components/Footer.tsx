import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  const company = {
    name: "JWFB FREIGHT BROKERAGE LLC",
    phone: "(785) 728-7826",
    email: "westj2277@gmail.com",
    address: "310 SHERMAN AVE, GOODLAND, KS 67735",
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-brand p-2.5 rounded-xl shadow-lg shadow-brand/20">
                <img src= {logo} alt="JF" className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none uppercase">
                  JWFB
                </span>
                <span className="text-[10px] text-brand-accent font-bold tracking-[0.2em] uppercase">
                  FREIGHT BROKERAGE
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Leading the way in logistics with reliable, efficient, and transparent freight solutions across the USA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-slate-900 rounded-xl hover:bg-brand hover:text-white transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 rounded-xl hover:bg-brand hover:text-white transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 rounded-xl hover:bg-brand hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 rounded-xl hover:bg-brand hover:text-white transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-accent transition-colors font-bold text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-accent transition-colors font-bold text-sm">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-brand-accent transition-colors font-bold text-sm">Portfolio</Link></li>
              <li><Link to="/shipper-portal" className="text-gray-400 hover:text-brand-accent transition-colors font-bold text-sm">Shipper Portal</Link></li>
              <li><Link to="/carrier-portal" className="text-gray-400 hover:text-brand-accent transition-colors font-bold text-sm">Carrier Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-brand p-2 rounded-lg shrink-0">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-gray-400 font-medium leading-relaxed">{company.address}</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-brand p-2 rounded-lg shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-gray-400 font-bold uppercase">{company.phone}</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-brand p-2 rounded-lg shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-gray-400 font-bold lowercase">{company.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Subscribe to our newsletter for the latest logistics news and insights.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-brand outline-none text-sm transition-all text-white placeholder-gray-500"
              />
              <button className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-xl transition-all font-black text-sm shadow-lg shadow-brand/20">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] uppercase tracking-[0.2em] font-black">
          <p>© {new Date().getFullYear()} {company.name}. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
