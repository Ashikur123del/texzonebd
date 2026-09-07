import React from "react";
import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";
import Rp1 from '../../assets/FR-1.jpg';
import Rp2 from '../../assets/RP-2.jpg';
import Rp3 from '../../assets/RP-3.jpg';

const repairingServices = [
  "Shade correction to match exact color standards",
  "Fixing uneven dyeing, tone variations, and spot removal",
  "Repairing minor fabric faults for a smooth, flawless finish",
  "Support for color matching and laboratory test requirements",
];

// String er poriborte imported variables map kora hoyeche
const repairingImages = [Rp1, Rp2, Rp3];

const FabricRepairingSection = () => {
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
        {/* Title Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-black text-red-600 uppercase tracking-tight">
            FABRIC REPAIRING
          </h2>
        </div>

        {/* Description */}
        <p className="text-slate-700 text-base md:text-lg leading-relaxed text-justify mb-8">
          At Tex Zone BD, we understand that even the finest fabrics may sometimes face shade variations, dyeing defects, or small damages. Our fabric repairing service ensures your fabrics regain their original look and quality.
        </p>

        {/* Services List */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            Our Services Include:
          </h3>
          <ul className="space-y-3">
            {repairingServices.map((service, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-700 font-medium text-base md:text-lg">
                <FaAngleDoubleRight className="text-red-600 text-xl flex-shrink-0 mt-1" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom 3 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repairingImages.map((imgUrl, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="h-48 sm:h-56 rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={imgUrl}
                alt={`Fabric repairing service ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricRepairingSection;