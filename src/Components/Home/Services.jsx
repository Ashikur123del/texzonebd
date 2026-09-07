import React from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaGlobeAmericas,
  FaPrint,
  FaTools,
} from "react-icons/fa";

const servicesList = [
  {
    id: "01",
    title: "Knit Fabric Manufacturing & Supply",
    icon: FaIndustry,
    description:
      "We manufacture and supply high-quality knit fabrics tailored to global RMG standards with full quality control and timely delivery.",
  },
  {
    id: "02",
    title: "Imported Fabric Supply",
    icon: FaGlobeAmericas,
    description:
      "Sourcing top-tier specialty and fancy imported fabrics directly from international standard suppliers to meet unique client needs.",
  },
  {
    id: "03",
    title: "Allover Print",
    icon: FaPrint,
    description:
      "Offering high-precision allover printing services with modern equipment, ensuring vibrant colors and excellent color fastness.",
  },
  {
    id: "04",
    title: "Fabric Repairing",
    icon: FaTools,
    description:
      "Expert fabric mending and defect correction services to ensure 100% usable quality before final shipment and production.",
  },
];

const Services = () => {
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
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-100 border border-red-200 text-[#990000] font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm"
          >
            TEX ZONE BD
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900"
          >
            OUR <span className="text-[#990000]">SERVICES</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#990000] rounded-full mt-4" />
          <p className="text-slate-600 text-base md:text-lg mt-4 max-w-2xl">
            100% Export-Oriented Knit Fabric Importer, Manufacturer & Supplier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-[#990000]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-100 group-hover:bg-[#990000] transition-colors" />

                <div>
              
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#990000] group-hover:bg-[#990000] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-inner">
                      <Icon className="text-2xl" />
                    </div>
                    <span className="text-3xl font-black text-stone-300 group-hover:text-[#990000] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#990000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;