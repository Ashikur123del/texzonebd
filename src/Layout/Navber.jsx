import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import imags from "../assets/logo.png";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu open হলে body scroll বন্ধ করো
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Clients", path: "clients" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <>
  
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[70] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

   
      <div className="bg-neutral text-neutral-content py-3 hidden lg:block border-b border-white/10 z-[60] relative">
        <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center text-xs font-medium tracking-wider">
          <div className="flex items-center gap-4 lg:gap-8">
            <a
              href="tel:+8801710119711"
              className="flex items-center text-xs lg:text-sm gap-2 hover:text-primary transition-colors"
            >
              <FaPhone className="text-primary" /> +8801710119711
            </a>
            <a
              href="mailto:info@texzonebd.com"
              className="flex items-center text-xs lg:text-sm gap-2 hover:text-primary transition-colors"
            >
              <FaEnvelope className="text-primary" /> info@texzonebd.com
            </a>
          </div>
          <div className="flex items-center gap-4 uppercase">
            <span className="flex items-center gap-2 text-xs lg:text-sm">
              <span className="w-5 h-5 bg-green-500 rounded-full animate-pulse"></span>
              100% Export Oriented
            </span>
          </div>
        </div>
      </div>


      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-base-100/80 backdrop-blur-xl py-2 shadow-2xl border-b border-primary/10"
            : "bg-base-100 py-3 lg:py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">
       
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="group-hover:opacity-80 transition-opacity">
              <img src={imags} className="w-36 sm:w-44 lg:w-60" alt="Logo" />
            </div>
          </div>

    
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.name} className="px-4">
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={800}
                    offset={-120}
                    className="text-sm font-bold cursor-pointer hover:text-primary transition-colors"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn btn-primary btn-md rounded-full px-8 font-bold"
            >
              Get Quote <FaChevronRight className="text-xs" />
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden btn btn-ghost btn-circle text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

      
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100dvh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-base-100 border-t overflow-y-auto"
              style={{ maxHeight: "calc(100dvh - 60px)" }}
            >
              <ul className="p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <ScrollLink
                      to={item.path}
                      smooth={true}
                      duration={800}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      className="block p-4 rounded-2xl font-bold cursor-pointer hover:bg-primary/10 transition-colors text-base"
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>

              {/* Mobile তে Contact Info */}
              <div className="px-6 pb-8 flex flex-col gap-4 border-t border-base-200 pt-4">
                <a
                  href="tel:+8801710119711"
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
                >
                  <FaPhone className="text-primary" /> +8801710119711
                </a>
                <a
                  href="mailto:info@texzonebd.com"
                  className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
                >
                  <FaEnvelope className="text-primary" /> info@texzonebd.com
                </a>
                <button className="btn btn-primary btn-md rounded-full font-bold w-full mt-2">
                  Get Quote <FaChevronRight className="text-xs" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navber;