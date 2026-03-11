import React from 'react';
import { motion } from 'framer-motion';
import { 
FaCheckCircle, FaAward, FaTools, 
  FaHandshake, FaMicrochip, FaLeaf, FaUsers, FaChartLine,
  FaGlobeAsia
} from 'react-icons/fa';
import { HiOutlineSparkles } from "react-icons/hi";
import images from '../../assets/f-5.jpeg'
const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white text-slate-900 font-sans leading-relaxed">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={images} alt="Textile Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <motion.span initial="hidden" animate="visible" variants={fadeInUp} className="bg-blue-600 px-4 py-2 rounded-md text-sm font-bold tracking-widest uppercase">
            Since Its Inception
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-5xl md:text-7xl font-black mt-6 mb-4">
            TEX ZONE BD
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-xl md:text-2xl text-blue-400 font-bold uppercase tracking-tight max-w-3xl">
            100% Export-Oriented Knit Fabric Importer, Manufacturer & Supplier
          </motion.p>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-black mb-6 border-l-8 border-blue-600 pl-4 uppercase">About Us</h2>
            <p className="text-lg text-slate-600 mb-6 text-justify">
              Tex Zone BD is a reliable textile solution provider in Bangladesh, offering premium fabric sourcing, manufacturing, and support services. We specialize in high-quality knit fabrics—both in-house and imported—to meet diverse apparel production needs with consistency and care.
            </p>
            <p className="text-lg text-slate-600 text-justify">
              Beyond fabric supply, we provide end-to-end services including contract knitting, dyeing, All-over print and fabric repairing. At Tex Zone BD, we deliver more than fabric — we deliver solutions that simplify and strengthen your production process.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-8 rounded-3xl text-center">
              <h3 className="text-4xl font-black text-blue-600">100%</h3>
              <p className="font-bold text-slate-500 uppercase text-xs">Export Oriented</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl text-center text-white">
              <h3 className=" text-2xl md:text-4xl font-black text-blue-400">Premium</h3>
              <p className="font-bold text-slate-400 uppercase text-xs">Quality Sourcing</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div whileHover={{ y: -10 }} className="bg-white p-12 rounded-[3rem] shadow-xl border-t-8 border-blue-600">
            <FaAward className="text-5xl text-blue-600 mb-6" />
            <h2 className="text-3xl font-black mb-4">MISSION</h2>
            <p className="text-slate-600 leading-relaxed">
              Tex Zone BD is committed to delivering premium fabrics and complete textile solutions that help our clients succeed in a competitive global market. We focus on quality, timely delivery, innovation, and sustainable practices.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-white p-12 rounded-[3rem] shadow-xl border-t-8 border-orange-500">
            <FaGlobeAsia className="text-5xl text-orange-500 mb-6" />
            <h2 className="text-3xl font-black mb-4">VISION</h2>
            <p className="text-slate-600 leading-relaxed">
              We aim to be a trusted and leading textile brand in Bangladesh and beyond, known for excellence, ethical business, and innovative solutions that add real value to the supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
     <section className="py-10 md:py-20 container mx-auto px-6 bg-gray-50 rounded-3xl">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-gray-900">
    Our Core Values
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { icon: FaCheckCircle, title: "Quality Excellence", desc: "We prioritize superior quality in every fabric." },
      { icon: FaUsers, title: "Customer Focus", desc: "Our client’s success drives our business." },
      { icon: FaHandshake, title: "Integrity", desc: "Honest and transparent business building trust." },
      { icon: FaMicrochip, title: "Innovation", desc: "Embracing new technologies to stay ahead." },
      { icon: FaChartLine, title: "Reliability", desc: "Timely delivery and consistent performance." },
      { icon: FaLeaf, title: "Sustainability", desc: "Environmentally responsible practices." },
      { icon: FaUsers, title: "Collaboration", desc: "Strong partnerships and teamwork." },
      { icon: FaTools, title: "Improvement", desc: "Constantly seeking ways to improve." }
    ].map((v, i) => (
      <div 
        key={i} 
        className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 mb-6">
          <v.icon className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h4 className="font-bold text-xl mb-3 text-gray-800">{v.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* 5. MD MESSAGE */}
      <section className="py-10 md:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-800 rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative">
            <div className="lg:w-1/3">
              <img src="https://img.freepik.com/free-photo/portrait-successful-man_23-2149026293.jpg" className="w-full h-[450px] object-cover rounded-[3rem] border-8 border-slate-700" alt="MD" />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-black mb-8 uppercase text-blue-400 underline decoration-blue-600 underline-offset-8">Message from Managing Director</h2>
              <p className="text-xl italic mb-8 text-slate-300">
                "Quality is the foundation of every successful business. Since our beginning, our main goal has been to provide high-quality fabrics and reliable services that help our customers grow..."
              </p>
              <div className="space-y-4 text-slate-400">
                <p>We are very proud of the trust our customers have placed in us. We promise to continue working honestly, with full dedication and care.</p>
                <div className="pt-6">
                  <h4 className="text-2xl font-bold text-white">MD Manik Sorder</h4>
                  <p className="text-blue-500 font-bold uppercase tracking-widest">Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KNIT FABRICS & SERVICES */}
     <section className="py-24 container mx-auto px-6">
  {/* Header Section */}
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900">Knit Fabric Manufacturing</h2>
    <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
      We manufacture all types of knit fabrics, specialty being our core strength.
    </p>
  </div>

  {/* Grid Section */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      "Single Jersey", "Pique", "Lacoste", "Rib", 
      "Interlock", "Fleece", "Terry", "Jacquard Knit", 
      "Waffle", "Mesh", "Honeycomb", "Lycra Jersey"
    ].map((item, i) => (
      <div 
        key={i} 
        className="group flex flex-col items-center justify-center bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-blue-100 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-default"
      >
        {/* Default Icon */}
        <div className="mb-4 p-3 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <HiOutlineSparkles size={24} />
        </div>
        
        <span className="font-bold text-slate-700 text-center">
          {item}
        </span>
      </div>
    ))}
  </div>
</section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">Why Choose Tex Zone BD?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { t: "End-to-End Solutions", d: "Everything from manufacturing to finishing under one roof." },
              { t: "4-Point Quality Check", d: "Strict QC from yarn to finished goods with 100% inspection." },
              { t: "Free R&D Support", d: "We can reverse-engineer any fabric swatch or photo for free." },
              { t: "Reliable Data Server", d: "All technical parameters stored for perfect repeat orders." },
              { t: "Global Network", d: "Access to the best imported fabrics from China & beyond." },
              { t: "Technical Hotline", d: "Free technical advice for any fabric-related issues." }
            ].map((item, i) => (
              <div key={i} className="bg-blue-700/50 p-8 rounded-3xl border border-white/10 hover:bg-white hover:text-blue-600 transition-all duration-500">
                <h4 className="text-2xl font-black mb-4">{item.t}</h4>
                <p className="opacity-90 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;