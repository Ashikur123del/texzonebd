import React from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import images from "../../assets/f-5.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-stone-800 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={images}
          alt="Textile Background"
          className="w-full h-full object-cover opacity-20 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
      </div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#990000]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 backdrop-blur-md px-5 py-2 rounded-full text-red-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-6"
        >
          <HiSparkles className="text-red-400" /> Since Its Inception
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-5xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-stone-100 to-stone-400 bg-clip-text text-transparent mb-6"
        >
          TEX ZONE BD
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-lg md:text-2xl text-stone-300 font-medium tracking-wide max-w-3xl mx-auto leading-relaxed"
        >
          100% Export-Oriented Knit Fabric Importer, Manufacturer & Supplier
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;