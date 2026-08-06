import React from "react";
import { motion } from "framer-motion";
import TermsAndConditions from "../TermsAndConditions";

const brands = [
  {
    id: 1,
    name: "Lidl",
    tag: "Retail Giant",
    style: "text-blue-600 font-extrabold tracking-tight text-xl",
  },
  {
    id: 2,
    name: "George.",
    tag: "Fashion",
    style: "text-slate-800 font-serif font-bold text-lg",
  },
  {
    id: 3,
    name: "PRIMARK",
    tag: "UK Apparel",
    style: "text-sky-500 font-sans font-black tracking-widest text-lg",
  },
  {
    id: 4,
    name: "Kappa",
    tag: "Sportswear",
    style: "text-red-600 font-black italic tracking-wide text-xl",
  },
  {
    id: 5,
    name: "PUMA",
    tag: "Athletics",
    style: "text-black font-black uppercase tracking-tighter text-2xl",
  },
  {
    id: 6,
    name: "ZARA",
    tag: "High Fashion",
    style: "text-slate-900 font-serif tracking-widest text-2xl font-bold",
  },
  {
    id: 7,
    name: "BRAVE SOUL",
    tag: "London",
    style: "text-stone-800 font-mono font-bold tracking-tight text-base",
  },
  {
    id: 8,
    name: "POLO RALPH LAUREN",
    tag: "Luxury",
    style:
      "text-emerald-950 font-serif font-bold text-xs tracking-wider uppercase text-center",
  },
  {
    id: 9,
    name: "next",
    tag: "Lifestyle",
    style:
      "text-slate-900 font-sans font-light tracking-widest text-2xl lowercase",
  },
  {
    id: 10,
    name: "U.S. POLO ASSN.",
    tag: "Since 1890",
    style:
      "text-blue-950 font-serif font-bold text-xs tracking-widest uppercase text-center",
  },
  {
    id: 11,
    name: "4F",
    tag: "Activewear",
    style: "text-black font-black italic text-2xl tracking-tighter",
  },
  {
    id: 12,
    name: "CANVAS",
    tag: "Apparel",
    style:
      "text-red-600 font-sans font-extrabold tracking-widest text-lg uppercase",
  },
];

const clients = [
  "COMODO FASHION",
  "TEB FASHION",
  "X-TEX",
  "DESIGN TEX",
  "BELL TEX",
  "TFT BD SOURCING",
  "APPAREL PARK",
  "SILCEN",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Clients = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-stone-50 to-emerald-50/20 text-slate-900 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center lg:text-left">
          <span className="text-xs uppercase tracking-widest font-black text-red-600 bg-red-100/60 px-3 py-1 rounded-full inline-block mb-3">
            Global Network
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
            OUR CLIENTS & <span className="text-red-600">BRANDS</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-3 max-w-3xl leading-relaxed">
            Over the years, we have built strong, enduring partnerships with
            renowned local and international fashion powerhouses in the
            Ready-Made Garments (RMG) industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-3">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-wide flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block animate-pulse"></span>
                BRANDS
              </h3>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                {brands.length} Global Partners
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {brands.map((brand) => (
                <motion.div
                  key={brand.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative h-28 p-4 border border-slate-200/80 rounded-2xl flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm shadow-xs hover:shadow-xl hover:border-red-500/50 transition-all duration-300 cursor-pointer select-none overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform origin-left" />

                  <span
                    className={`${brand.style} transition-transform duration-300 group-hover:scale-105`}
                  >
                    {brand.name}
                  </span>

                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mt-1 opacity-60 group-hover:opacity-100 group-hover:text-red-600 transition-all">
                    {brand.tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-3">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-wide flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                CLIENTS
              </h3>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Direct Buyers
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {clients.map((client, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="h-20 p-4 bg-emerald-50/60 border border-emerald-200/60 rounded-2xl flex items-center justify-center text-center shadow-xs hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-lg transition-all duration-300 cursor-pointer select-none group"
                >
                  <span className="font-extrabold text-emerald-950 group-hover:text-white text-sm md:text-base tracking-wider transition-colors">
                    {client}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-10">
          <TermsAndConditions />
        </div>
      </div>
    </section>
  );
};

export default Clients;
