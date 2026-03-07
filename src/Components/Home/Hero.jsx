import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { 
  FaArrowRight, FaPhoneAlt, FaEnvelope, 
  FaCheckCircle, FaAward, FaGlobe 
} from 'react-icons/fa';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800",
      title: "Premium Knitting",
    },
    {
      url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000",
      title: "Modern Textiles",
    },
    {
      url: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Export Quality",
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-base-100 overflow-hidden py-12 lg:py-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-20 hidden lg:block"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* --- LEFT SIDE: CONTENT --- */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
              <FaCheckCircle className="animate-pulse" /> 100% EXPORT-ORIENTED UNIT
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-neutral">
              Quality Fabrics <br />
              <span className="text-primary italic">Global Standards.</span>
            </h1>

            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              <span className="font-bold text-slate-800">TEX ZONE BD</span> is your premier partner for high-quality knit fabric manufacturing and global sourcing solutions.
            </p>

            {/* Stats Badge */}
            <div className="flex flex-wrap gap-4 py-4">
              <div className="flex items-center gap-3 bg-white shadow-sm border p-3 rounded-2xl">
                <FaAward className="text-3xl text-orange-500" />
                <div>
                  <h4 className="font-bold text-lg leading-none">10+ Years</h4>
                  <p className="text-xs text-slate-400">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white shadow-sm border p-3 rounded-2xl">
                <FaGlobe className="text-3xl text-blue-500" />
                <div>
                  <h4 className="font-bold text-lg leading-none">Worldwide</h4>
                  <p className="text-xs text-slate-400">Exporting</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary btn-lg rounded-full px-8 shadow-xl shadow-primary/20 group">
                Get a Quote <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="btn btn-ghost btn-lg rounded-full hover:bg-slate-100">
                Our Services
              </button>
            </div>

            {/* Contact Quick Link */}
            <div className="flex gap-6 pt-4 border-t border-slate-100">
               <a href="tel:+8801710119711" className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                  <FaPhoneAlt className="text-primary" /> +8801710119711
               </a>
               <a href="mailto:info@texzonebd.com" className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                  <FaEnvelope className="text-primary" /> info@texzonebd.com
               </a>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: SLIDER --- */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Creative Shape Wrapper */}
            <div className="relative z-10 rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 4000 }}
                loop={true}
                pagination={{ clickable: true }}
                className="h-[400px] lg:h-[600px] w-full"
              >
                {heroImages.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img 
                        src={slide.url} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-10 left-10 text-white">
                        <p className="uppercase tracking-[0.2em] text-xs font-bold text-primary mb-2">Tex Zone BD Gallery</p>
                        <h3 className="text-3xl font-bold">{slide.title}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Floating Decorative Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                   <FaCheckCircle />
                </div>
                <div>
                   <h4 className="font-black text-xl">Verified</h4>
                   <p className="text-slate-400 text-sm">Manufacturer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;