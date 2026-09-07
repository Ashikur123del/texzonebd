import React from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { FaGlobeAsia, FaShip, FaClock, FaBoxOpen, FaFileInvoiceDollar, FaWeightHanging } from "react-icons/fa";

const ImportedHero = () => {
  const serviceDetails = [
    { icon: FaGlobeAsia, label: "FABRIC ORIGIN", value: "China" },
    { icon: FaBoxOpen, label: "MOQ", value: "2,000 YDS" },
    { icon: FaWeightHanging, label: "GSM / COLOR", value: "Buyer Requirement" },
    { icon: FaClock, label: "DELIVERY", value: "Around 30 days after L/D confirmation" },
    { icon: FaFileInvoiceDollar, label: "PAYMENT TERMS", value: "LC / TT (CNF-CTG)" },
    { icon: FaShip, label: "LOGISTICS PARTNERS", value: "MCC & Maersk Line (Faster & Trusted)" },
  ];

  return (
    <>
       <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/40 py-5 md:py-6">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Left Glow */}
        <div className="absolute -left-40 -top-40 h-full w-full rounded-full bg-emerald-200/20 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-amber-200/25 blur-3xl" />

        {/* Bottom Glow */}
        <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-emerald-100/40 blur-3xl" />

        {/* Soft Radial Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(245,158,11,0.08),transparent_30%)]" />
      </div>
      <div className="relative py-10 bg-stone-950 text-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-50 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-50 h-96 bg-[#990000]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 backdrop-blur-md px-5 py-2 rounded-full text-red-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <HiSparkles /> International Sourcing
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-stone-100 to-stone-400 bg-clip-text text-transparent mb-6">
            IMPORTED FABRICS SUPPLY
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Reliable fabric solutions from China meeting international RMG standards in Bangladesh.
          </p>
        </div>
      </div>

      <div className="py-20 container mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/80 shadow-lg mb-16 relative overflow-hidden">
      
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Global Quality Sourcing & Supply Chain
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed text-justify">
            We mainly source and supply a wide range of high-quality fabrics from China, ensuring consistency in quality and availability. Over the years, Tex Zone BD has built a strong reputation in the Ready-Made Garments (RMG) sector of Bangladesh by delivering reliable fabric solutions that meet international standards. Our trusted network of suppliers and commitment to timely delivery have made us a dependable partner for many leading garment manufacturers and exporters.
          </p>
        </div>

        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#990000] font-bold uppercase tracking-widest text-sm">Specification</span>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Our Service Corners</h3>
            <div className="w-16 h-1 bg-[#990000] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md hover:border-[#990000] transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-red-50 text-[#990000] rounded-xl">
                  <item.icon size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#990000] tracking-wider uppercase block mb-1">
                    {item.label}
                  </span>
                  <p className="font-bold text-slate-800 text-base">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
          </div>
      </section>
    </>
  );
};

export default ImportedHero;