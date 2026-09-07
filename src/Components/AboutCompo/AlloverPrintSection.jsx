import React from "react";
import { motion } from "framer-motion";
import Ap1 from '../../assets/ap-1.jpeg';
import Ap2 from '../../assets/ap-2.jpeg';
import Ap3 from '../../assets/ab-3.jpeg';
import Ap4 from '../../assets/ap-4.jpeg';
import Ap5 from '../../assets/ap-5.jpeg';
import Ap6 from '../../assets/ap-6.jpeg';

const printTypes = [
  { 
    name: "Pigment", 
    img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=300&auto=format&fit=crop" 
  },
  { name: "Rubber", img: Ap1 },
  { name: "Discharge", img: Ap2 }, // Fixed key-value syntax
  { name: "Burn Out", img: Ap3 },  // Fixed key-value syntax
  { name: "Glitter", img: Ap4 },   // Fixed key-value syntax
  { name: "Puff", img: Ap5 },
  { name: "Fluorescent", img: Ap6 },
];

const AlloverPrintSection = () => {
  return (
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
      <div className="container mx-auto px-6">
        <div className="mb-5">
          <div className="mb-6">
            <span className="text-[#990000] font-black uppercase tracking-widest text-xs block mb-1">
              MORE SERVICE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-red-600 uppercase tracking-tight">
              ALLOVER PRINT
            </h2>
          </div>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed text-justify mb-4">
            We offer advanced all over printing services using flatbed technologies, capable of printing continuous patterns across the entire fabric surface. With modern machinery and skilled technicians, we ensure sharp design accuracy, vibrant colors, and long-lasting prints. From fashion fabrics to customized designs, our all over printing delivers consistent quality for both small and bulk orders.
          </p>

          <p className="text-red-600 italic font-semibold text-sm md:text-base mb-8">
            Types of Printing: We can do all sorts of flat bed print except REACTIVE PRINT.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {printTypes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full h-32 sm:h-36 rounded-lg overflow-hidden border border-stone-200 shadow-sm group-hover:shadow-md group-hover:border-[#990000] transition-all bg-stone-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="font-bold text-slate-800 text-sm mt-2 text-center group-hover:text-[#990000] transition-colors">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
          <hr className="mt-16 border-t-2 border-red-500/30" />
        </div>
      </div>
    </section>
  );
};

export default AlloverPrintSection;