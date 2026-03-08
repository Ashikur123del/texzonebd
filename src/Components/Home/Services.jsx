import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { 
  FaIndustry, FaShip, FaCogs, FaTools, FaCheckCircle, 
  FaArrowRight, FaHeadset, FaFlask, FaFingerprint 
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Knit Manufacturing",
      subtitle: "Fancy & Specialty Fabrics",
      icon: <FaIndustry />,
      items: ["Single Jersey", "Pique", "Interlock", "Fleece", "Terry", "Jacquard"],
      bg: "bg-gradient-to-br from-slate-900 to-blue-900",
      img: "../../../src/assets/f1.jpg"
    },
    {
      title: "Global Sourcing",
      subtitle: "Imported from China",
      icon: <FaShip />,
      items: ["Taffeta", "Ribstop", "Softshell", "Microfiber", "Canvas", "Taslane"],
      bg: "bg-gradient-to-br from-blue-900 to-indigo-900",
      img: "../../../src/assets/f2.jpg"
    },
    {
      title: "Advanced Processing",
      subtitle: "Dyeing & Printing",
      icon: <FaCogs />,
      items: ["All-over Print", "Contract Dyeing", "Shade Correction", "Fabric Repair"],
      bg: "bg-gradient-to-br from-slate-800 to-slate-900",
      img: "../../../src/assets/sep.jpg"
    }
  ];

  return (
    <div className="bg-[#0A0F1A] text-white min-h-screen font-sans">
      
      {/* --- HERO SECTION: Elegant & Dark --- */}
      <section className="relative py-10 md:py-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Crafting The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Textile Solutions
              </span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Tex Zone BD provides 360° textile support—from manufacturing premium knit fabrics to sourcing global materials with uncompromised quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICE CARDS: Modern Glassmorphism --- */}
      <section className="py-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.2 }}
              className={`${s.bg} rounded-[2rem] p-1 border border-white/10 overflow-hidden group hover:border-blue-500/50 transition-all duration-500`}
            >
              <div className="relative h-56 overflow-hidden rounded-t-[1.8rem]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-amber-500 text-3xl mb-2">{s.icon}</div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wider">{s.subtitle}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {s.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                      <FaCheckCircle className="text-blue-500 text-xs" /> {item}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600 transition-all font-bold flex items-center justify-center gap-3 group">
                  Learn More <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US: Bold Dark Section --- */}
      <section className=" py-10 md:py-24 bg-[#0F172A] relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-8">Why Global Brands <br /><span className="text-blue-500">Trust Tex Zone BD?</span></h2>
              <div className="space-y-6">
                {[
                  { t: "Free R&D Support", d: "Send us a photo or swatch, we reverse-engineer the fabric for free.", icon: <FaFlask /> },
                  { t: "4-Point Quality System", d: "Strict international inspection standards for 100% defect-free fabric.", icon: <FaFingerprint /> },
                  { t: "Live Data Server", d: "Your technical data is stored securely for perfect repeat orders.", icon: <FaTools /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                    <div className="w-14 h-14 shrink-0 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.t}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-800 shadow-2xl">
                  <img src="../../../src/assets/sep.jpg" alt="Factory" className='h-[400px] md:h-[600px]' />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-[2rem] z-20 hidden md:block">
                  <p className="text-4xl font-black italic">100%</p>
                  <p className="text-xs uppercase font-bold tracking-widest">Export Quality</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SMART FOOTER / CALL TO ACTION --- */}
      <section className="py-20 container mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-blue-900/40">
           <FaHeadset className="text-5xl mx-auto mb-6 text-amber-400" />
           <h2 className="text-3xl md:text-5xl font-black mb-6 italic text-white leading-tight">
             Facing Fabric Issues? <br /> Get Free Technical Advice.
           </h2>
           <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto">
             Whether you are our client or not, our technical team is ready to help you solve production challenges.
           </p>
           <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+8801710119711" className="px-10 py-5 bg-white text-blue-900 rounded-full font-black text-lg hover:scale-105 transition-all">
                Call Our Hotline
              </a>
              <a href="mailto:info@texzonebd.com" className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-black text-lg hover:bg-white hover:text-blue-900 transition-all">
                Contact via Email
              </a>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Services;