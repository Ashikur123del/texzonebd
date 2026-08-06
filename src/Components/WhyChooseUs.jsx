import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaShippingFast,
  FaGlobe,
  FaCheckDouble,
  FaFlask,
  FaDatabase,
  FaSlidersH,
  FaUserTie,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaCogs,
      t: "End-to-End Textile Solutions",
      d: "From fabric manufacturing to finishing services, we offer everything under one roof, streamlining your supply chain and making production hassle-free.",
    },
    {
      icon: FaShippingFast,
      t: "Reliable Delivery",
      d: "Time is money in the apparel industry. We commit to on-time delivery to keep your production schedule on track.",
    },
    {
      icon: FaGlobe,
      t: "Global Sourcing Network",
      d: "With strong connections to international suppliers, we provide access to a wide range of imported fabrics and raw materials.",
    },
    {
      icon: FaCheckDouble,
      t: "Strong Quality Control Department",
      d: "Our QC department operates with precision at every stage—from yarn to finished goods—using the internationally recognized 4-point inspection system. Every batch undergoes multiple levels of checks, and comprehensive inspection reports are provided to customers, ensuring trust and consistency in quality.",
    },
    {
      icon: FaFlask,
      t: "Advanced R&D Support",
      d: "Our R&D team can reverse-engineer any fabric if you provide a swatch or even just a photo. We determine composition, yarn selection, fabric type, construction method, and cost, while also advising on ways to reduce production costs. This service is provided completely free of charge.",
    },
    {
      icon: FaDatabase,
      t: "Data Server",
      d: "We maintain a well-organized data server where all technical parameters—from initial development to any small or large quantity—are securely stored. For repeat orders, we can produce fabrics exactly according to previous specifications, ensuring an identical match with earlier fabrics. Buyers can also request their data at any time, and we provide it promptly.",
    },
    {
      icon: FaSlidersH,
      t: "Flexible & Scalable",
      d: "Whether it’s small batch orders or large-volume contracts, we adapt to your needs with the same level of attention and professionalism.",
    },
    {
      icon: FaUserTie,
      t: "Experienced Team",
      d: "Our dedicated professionals bring deep industry knowledge and hands-on expertise to ensure smooth service and communication.",
    },
    {
      icon: FaHandshake,
      t: "Customer-Centric Approach",
      d: "Your satisfaction is our success. We focus on building long-term relationships through transparency, support, and responsiveness.",
    },
  ];

  return (
    <section className="py-24 bg-stone-50 text-slate-900 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-100 border border-red-200 text-[#990000] font-black text-xs md:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm"
          >
            TEX ZONE BD
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900"
          >
            WHY CHOOSE US
          </motion.h2>

          <div className="w-20 h-1.5 bg-[#990000] rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#990000] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-black text-stone-300 group-hover:text-[#990000] transition-colors">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#990000] group-hover:bg-[#990000] group-hover:text-white transition-all flex items-center justify-center">
                      <Icon className="text-xl" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-snug text-slate-900 group-hover:text-[#990000] transition-colors">
                    {item.t}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm text-justify">
                    {item.d}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#990000] to-red-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-3xl flex-shrink-0">
              <FaHeadset />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-black uppercase tracking-widest bg-white text-[#990000] px-3 py-1 rounded-full">
                  Point 10
                </span>
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-wide">
                  Free Technical Advice & Support
                </h4>
              </div>

              <p className="text-red-100 text-base md:text-lg leading-relaxed text-justify mt-2 font-medium">
                Whether you are our client or not, if you face any fabric-related issues, you can call our hotline, and our technical team will be ready to provide you with advice at any time — free of charge.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;