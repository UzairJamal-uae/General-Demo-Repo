import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const performanceData = [
  { name: "Jan", loads: 400, revenue: 2400 },
  { name: "Feb", loads: 300, revenue: 1398 },
  { name: "Mar", loads: 200, revenue: 9800 },
  { name: "Apr", loads: 278, revenue: 3908 },
  { name: "May", loads: 189, revenue: 4800 },
  { name: "Jun", loads: 239, revenue: 3800 },
  { name: "Jul", loads: 349, revenue: 4300 },
];

export default function PerformanceGraphs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Data Driven</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6 font-sans">Performance Analytics</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We maintain transparency through data. Monitor our efficiency and growth metrics in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-bold mb-8 text-slate-900">Monthly Load Volume</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: "12px", border: "none", backgroundColor: "#fff", color: "#111", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                    cursor={{ fill: "#f3f4f6" }}
                  />
                  <Bar dataKey="loads" fill="#0e1b2f" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-bold mb-8 text-slate-900">Revenue Growth Trend</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0e1b2f" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#0e1b2f" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: "12px", border: "none", backgroundColor: "#fff", color: "#111", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#0e1b2f" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
