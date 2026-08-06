import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaArrowUp,
  FaChevronRight,
} from "react-icons/fa";

import logoimg from "../assets/logo.png";

const Footer = () => {
  const scrollToSection = (id) => {
    if (id === "all" || id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0a0f1d] text-slate-300 pt-20 pb-10 relative overflow-hidden font-sans border-t border-slate-800/80">
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#990000]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={logoimg}
                alt="Tex Zone BD Logo"
                className="h-12 w-auto object-contain bg-white/90 p-2 rounded-xl shadow-lg border border-white/20"
              />
            </div>
            <p className="text-slate-400 leading-relaxed font-normal text-sm md:text-base">
              100% Export-Oriented Knit Fabric Importer, Manufacturer &
              Supplier. Precision engineering and excellence in every yarn.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                {
                  icon: <FaLinkedin />,
                  url: "https://linkedin.com/company/texzonebd",
                },
                { icon: <FaFacebook />, url: "#" },
                { icon: <FaTwitter />, url: "#" },
                { icon: <FaInstagram />, url: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900/80 border border-slate-700/60 rounded-xl flex items-center justify-center text-slate-300 hover:bg-[#990000] hover:text-white hover:border-[#990000] hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black mb-6 uppercase tracking-[0.25em] text-[#ff4d4d]">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {[
                "All",
                "Home",
                "About",
                "Services",
                "Process",
                "Clients",
                "Terms",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`flex items-center gap-2 transition-all duration-200 font-semibold text-sm group cursor-pointer ${
                      item === "All"
                        ? "text-[#ff4d4d] font-black hover:text-white"
                        : "text-slate-400 hover:text-white hover:translate-x-2"
                    }`}
                  >
                    <FaChevronRight className="text-[10px] text-[#ff4d4d] opacity-0 group-hover:opacity-100 transition-opacity" />{" "}
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black mb-6 uppercase tracking-[0.25em] text-[#ff4d4d]">
              Services & Fabrics
            </h4>
            <ul className="space-y-3.5">
              {[
                "Knit Fabric Manufacturing",
                "Imported Fabric Supply",
                "Allover Print Services",
                "Fabric Repairing",
                "Single Jersey & Pique",
                "Fleece & Specialty Knits",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-slate-400 font-semibold text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#990000]"></span>{" "}
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-6 uppercase tracking-[0.25em] text-[#ff4d4d]">
              Get In Touch
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="w-9 h-9 bg-slate-900 border border-slate-700/60 rounded-xl flex items-center justify-center text-[#ff4d4d] group-hover:bg-[#990000] group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                  <FaPhoneAlt />
                </div>
                <div className="text-slate-200 font-bold">
                  <p>+88 01710 11 97 11</p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-9 h-9 bg-slate-900 border border-slate-700/60 rounded-xl flex items-center justify-center text-[#ff4d4d] group-hover:bg-[#990000] group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                  <FaEnvelope />
                </div>
                <p className="text-slate-200 font-semibold break-all">
                  manik@texzonebd.com
                </p>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-9 h-9 bg-slate-900 border border-slate-700/60 rounded-xl flex items-center justify-center text-[#ff4d4d] group-hover:bg-[#990000] group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                  <FaGlobe />
                </div>
                <p className="text-slate-200 font-semibold">
                  www.texzonebd.com
                </p>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-9 h-9 bg-slate-900 border border-slate-700/60 rounded-xl flex items-center justify-center text-[#ff4d4d] group-hover:bg-[#990000] group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  <strong className="text-slate-200">Head Office:</strong>{" "}
                  Uttara, Dhaka <br />
                  <strong className="text-slate-200">
                    Gazipur Office:
                  </strong>{" "}
                  Vogra, Gazipur
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TEX ZONE BD. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:bg-[#990000] text-slate-300 hover:text-white hover:border-[#990000] px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer shadow-sm"
          >
            Back to top <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
