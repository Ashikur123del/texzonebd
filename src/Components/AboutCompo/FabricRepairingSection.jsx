
import React from "react";
import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

const repairingServices = [
  "Shade correction to match exact color standards",
  "Fixing uneven dyeing, tone variations, and spot removal",
  "Repairing minor fabric faults for a smooth, flawless finish",
  "Support for color matching and laboratory test requirements",
];

const repairingImages = [
  "https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=500&auto=format&fit=crop",
];

const FabricRepairingSection = () => {
  return (
    <section className="py-20 bg-white text-slate-900 font-sans selection:bg-[#990000] selection:text-white">
        <div className="container mx-auto px-6 ">
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