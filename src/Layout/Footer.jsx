
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin, FaFacebook, FaTwitter, FaInstagram,
  FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt,
  FaArrowUp, FaChevronRight
} from 'react-icons/fa';

const Footer = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 pt-24  text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-500 border-t border-slate-200 dark:border-white/5">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/5 blur-[150px] rounded-full -mr-64 -mb-64"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 lg:mb-32">

          {/* Brand Info */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black italic shadow-2xl shadow-blue-500/30">T</div>
              <span className="font-black text-3xl tracking-tighter uppercase whitespace-nowrap text-slate-900 dark:text-white">TEX ZONE <span className="text-blue-600">BD</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-xl">
              Elevating the global apparel industry with precision knit manufacturing and strategic textile sourcing. Excellence in every fiber.
            </p>
            <div className="flex gap-5">
              {[
                { icon: <FaLinkedin />, url: "https://linkedin.com/company/texzonebd" },
                { icon: <FaFacebook />, url: "#" },
                { icon: <FaTwitter />, url: "#" },
                { icon: <FaInstagram />, url: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-xl text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-90 transition-all shadow-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black mb-10 lg:mb-12 uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500">Navigation</h4>
            <ul className="space-y-6">
              {['Home', 'About', 'Services', 'Process', 'Clients', 'Terms', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="flex items-center gap-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:translate-x-3 transition-all font-bold text-sm uppercase tracking-widest group"
                  >
                    <FaChevronRight className="text-[10px] text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-black mb-10 lg:mb-12 uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500">Fabrics</h4>
            <ul className="space-y-6">
              {[
                "Single Jersey",
                "Lacoste / Pique",
                "Interlock / Rib",
                "Fleece / Terry",
                "Specialty Knits",
                "Imported Wovens"
              ].map((service) => (
                <li key={service} className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-800"></span> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-black mb-10 lg:mb-12 uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500">Get In Touch</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaPhoneAlt />
                </div>
                <div className="text-slate-500 dark:text-slate-400 font-bold tracking-widest text-sm transition-colors">
                  <p>+8801710119711</p>
                  <p>+8801611847184</p>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-black break-all text-sm tracking-widest transition-colors">info@texzonebd.com</p>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaGlobe />
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-bold italic text-sm tracking-widest transition-colors">www.texzonebd.com</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
