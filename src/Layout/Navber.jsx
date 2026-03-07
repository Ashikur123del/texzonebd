import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Clients', path: 'clients' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <>
      {/* ১. রিডিং প্রগ্রেস বার */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[70] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ২. টপ বার (যা আপনি রাখতে চেয়েছিলেন) */}
      <div className="bg-neutral text-neutral-content py-2 hidden lg:block border-b border-white/10 z-[60] relative">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs font-medium tracking-wider">
          <div className="flex items-center gap-8">
            <a href="tel:+8801710119711" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaPhone className="text-primary" /> +8801710119711
            </a>
            <a href="mailto:info@texzonebd.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaEnvelope className="text-primary" /> info@texzonebd.com
            </a>
          </div>
          <div className="flex items-center gap-4 uppercase">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              100% Export Oriented
            </span>
          </div>
        </div>
      </div>

      {/* ৩. মেইন নেভবার */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
          ? 'bg-base-100/80 backdrop-blur-xl py-2 shadow-2xl border-b border-primary/10' 
          : 'bg-base-100 py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-2 group cursor-pointer">
            <motion.div whileHover={{ rotate: 360 }} className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="text-xl font-black italic">T</span>
            </motion.div>
            <span className="text-xl font-black tracking-tighter group-hover:text-primary transition-colors">
              TEX ZONE <span className="text-primary">BD</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.name} className="px-4">
                  <ScrollLink 
                    to={item.path}
                    smooth={true}
                    duration={800}
                    offset={-120} // টপ বার এবং নেভবার হাইট অনুযায়ী অ্যাডজাস্ট করা
                    className="text-sm font-bold cursor-pointer hover:text-primary transition-colors"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <motion.button whileHover={{ scale: 1.05 }} className="btn btn-primary btn-md rounded-full px-8 font-bold">
              Get Quote <FaChevronRight className="text-xs" />
            </motion.button>
          </div>

          <button className="lg:hidden btn btn-ghost btn-circle text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-base-100 border-t">
              <ul className="p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <ScrollLink key={item.name} to={item.path} smooth={true} duration={800} offset={-120} onClick={() => setIsOpen(false)} className="p-4 rounded-2xl font-bold cursor-pointer hover:bg-primary/10">
                    {item.name}
                  </ScrollLink>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navber;