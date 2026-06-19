import { useState, useEffect, useRef } from "react";
import React from "react";
import { MessageSquare, X, Send, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I'm your JWFB Freight Brokerage assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simple bot logic
    setTimeout(() => {
      let botResponse = "I'm not sure about that. Would you like to speak with a representative? Call us at (785) 728-7826.";
      const lower = input.toLowerCase();
      
      if (lower.includes("track")) botResponse = "Tracking is currently unavailable on our website. Please contact us for status updates.";
      else if (lower.includes("load")) botResponse = "We are currently updating our load board. Contact our operations team for active freight.";
      else if (lower.includes("service")) botResponse = "We offer Full Loads, Partial Loads, IFTA, and Factored Loads.";
      else if (lower.includes("hello") || lower.includes("hi")) botResponse = "Hi there! How can JWFB Freight Brokerage help you move your precious cargo today?";

      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-3xl shadow-[0_30px_90px_-20px_rgba(14,27,47,0.25)] w-80 sm:w-96 overflow-hidden border border-gray-100 mb-4"
          >
            {/* Header */}
            <div className="bg-brand p-5 text-white flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-2.5 rounded-xl">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest">JWFB Assistant</h3>
                  <p className="text-[10px] text-white/70 font-bold uppercase tracking-tighter">Powered by JWFB FREIGHT BROKERAGE LLC</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-xl transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-80 overflow-y-auto p-6 space-y-6 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-end space-x-3",
                    msg.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "p-2.5 rounded-full shrink-0 shadow-sm",
                    msg.role === "user" ? "bg-brand text-white" : "bg-white text-gray-400"
                  )}>
                    {msg.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-brand text-white rounded-br-none shadow-lg shadow-brand/20 font-bold"
                        : "bg-white text-gray-600 border border-gray-100 rounded-bl-none shadow-sm font-medium"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-5 bg-white border-t border-gray-100 flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3 text-sm focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none text-slate-900 transition-all font-medium placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="bg-brand text-white p-3 rounded-2xl hover:bg-brand-hover transition-all shadow-lg shadow-brand/20"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-5 rounded-[2rem] shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center",
          isOpen ? "bg-slate-900 text-brand-accent animate-none" : "bg-brand text-white shadow-xl shadow-brand/20"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
}
