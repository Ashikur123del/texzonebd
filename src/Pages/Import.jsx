import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAsia, FaBoxOpen, FaShippingFast, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

// Image Imports
import g1 from "../assets/ab-3.jpeg";
import g2 from "../assets/ap-1.jpeg";
import g3 from "../assets/ap-2.jpeg";
import g4 from "../assets/ap-5.jpeg";
import g5 from "../assets/FC-4.jpeg";
import g6 from "../assets/FC-8.jpeg";
import g7 from "../assets/FC-7.jpeg";
import g8 from "../assets/FC-2.jpeg";
import g9 from "../assets/FC-5.jpeg";
import g10 from "../assets/K-2.jfif";
import g11 from "../assets/K-2.jfif";
import g12 from "../assets/Kn-2.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Import = () => {
  const featuredFabrics = [
    { name: "Scuba Fabric", tag: "Imported Specialty", image: g1 },
    { name: "Viscose Poplin AOP", tag: "Woven Print", image: g2 },
    { name: "Fleece Fabric", tag: "Warm Knit", image: g3 },
    { name: "Polyester Woven AOP", tag: "Durable Print", image: g4 },
    { name: "Muslin Fabric", tag: "Lightweight Woven", image: g5 },
    { name: "Solid, Y/D Knit", tag: "Yarn Dyed", image: g6 },
    { name: "Velour", tag: "Plush Texture", image: g7 },
    { name: "Denim", tag: "Classic Woven", image: g8 },
    { name: "Taffeta", tag: "Synthetic Woven", image: g9 },
    { name: "Satin", tag: "Smooth Finish", image: g10 },
    { name: "Twill", tag: "Durable Weave", image: g11 },
    { name: "Chiffon", tag: "Sheer Fabric", image: g12 },
  ];

  const fabricVarieties = [
    "Taffeta", "Ripstop", "Satin", "Pongee", "Oxford", "Twill", 
    "Taslane", "Viscose", "Chiffon", "Microfiber", "Canvas", "Fleece", 
    "Tricot", "Jersey", "Sherpa", "Terry", "Pique", "Cotton-Spandex", 
    "Velvet", "Mesh", "Softshell", "Interlock"
  ];

  const specifications = [
    { label: "Fabric Origin", value: "China", icon: FaGlobeAsia },
    { label: "Minimum Order Quantity", value: "2,000 YDS", icon: FaBoxOpen },
    { label: "GSM / Color", value: "Buyer Requirement", icon: FaCheckCircle },
    { label: "Estimated Delivery", value: "~30 Days (After L/D)", icon: FaShippingFast },
    { label: "Payment Terms", value: "LC / TT (CNF-CTG)", icon: FaCheckCircle },
    { label: "Logistics Partners", value: "MCC & Maersk Line", icon: FaLayerGroup },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/40 py-12 md:py-16">
      
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-full w-full rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(245,158,11,0.08),transparent_30%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 space-y-20">
        
        {/* Header / Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block px-3.5 py-1 bg-red-50 text-[#990000] font-bold rounded-lg text-sm border border-red-100">
            GLOBAL SOURCING
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            IMPORTED FABRICS <span className="text-[#990000]">SUPPLY</span>
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Reliable fabric solutions imported directly from China, tailored to meet international RMG standards in Bangladesh with uncompromised quality and timely execution.
          </p>
        </div>

        {/* Global Supply Chain Specifications */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200/80 relative overflow-hidden">
          <div className="border-b border-stone-100 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="text-[#990000] font-bold uppercase tracking-widest text-xs">At A Glance</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Supply Chain Specifications</h2>
            </div>
            <p className="text-slate-500 text-sm">Clear operational terms for smooth production planning</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, i) => (
              <div key={i} className="p-6 bg-stone-50/80 rounded-2xl border border-stone-100 flex items-start gap-4">
                <div className="p-3 bg-red-50 text-[#990000] rounded-xl text-xl">
                  <spec.icon />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{spec.label}</span>
                  <p className="text-lg font-black text-slate-900 mt-0.5">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Fabric Samples Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[#990000] font-bold uppercase tracking-widest text-sm">Product Gallery</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Swatches Showcase</h2>
            <div className="w-16 h-1.5 bg-[#990000] mx-auto mt-4 rounded-full" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {featuredFabrics.map((fabric, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group bg-white p-4 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-red-900/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="w-full h-44 bg-stone-100 rounded-2xl mb-4 overflow-hidden relative">
                  <img 
                    src={fabric.image} 
                    alt={fabric.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center pb-2">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#990000] transition-colors">{fabric.name}</h3>
                  <span className="text-xs font-bold text-[#990000] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md mt-2 inline-block">
                    {fabric.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Available Imported Fabric Varieties */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div>
            <span className="text-[#990000] font-bold uppercase tracking-widest text-xs">Variety Spectrum</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Available Imported Varieties</h2>
            <p className="text-slate-500 text-sm mt-1">Comprehensive range of regular and specialized imported fabrics</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {fabricVarieties.map((variety, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-stone-100 hover:bg-[#990000] hover:text-white text-slate-700 font-bold text-xs sm:text-sm rounded-xl border border-stone-200/80 transition-all duration-200 cursor-default"
              >
                {variety}
              </span>
            ))}
          </div>
        </div>

        {/* Custom Fabric Banner */}
        <div className="bg-gradient-to-br from-[#990000] to-red-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-red-950/10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-2xl text-center lg:text-left z-10">
            <span className="text-xs font-bold uppercase tracking-widest bg-red-800/60 px-3 py-1 rounded-md text-red-100 border border-red-700/50 inline-block">
              Tailored Sourcing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              NEED CUSTOMIZED FABRIC SPECIFICATIONS?
            </h2>
            <p className="text-red-100 text-base leading-relaxed">
              Share your tech pack or reference sample. We handle custom composition, weight, and specialized finishes according to your buyer's exact needs.
            </p>
          </div>
          
          <a 
            href="/contact" 
            className="z-10 whitespace-nowrap px-8 py-4 bg-white text-[#990000] font-black rounded-2xl hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
          >
            Contact Sourcing Team
          </a>
        </div>

      </div>
    </section>
  );
};

export default Import;