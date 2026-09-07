import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUserTie,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full bg-white rounded-3xl shadow-xl border border-stone-200/80 p-8 md:p-12 flex flex-col lg:flex-row gap-12 relative z-10"
      >
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-[#990000] font-black uppercase text-xs tracking-wider bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
              Let's <span className="text-[#990000]">Connect</span>
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed">
              আমাদের সাথে যোগাযোগের জন্য নিচে দেওয়া তথ্যগুলো ব্যবহার করুন অথবা সরাসরি ফর্মটি পূরণ করুন।
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100">
              <div className="p-3 bg-red-100 text-[#990000] rounded-xl flex-shrink-0 mt-0.5">
                <FaUserTie className="text-lg" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base">
                  MD. MANIK SORDER
                </h4>
                <p className="text-xs font-semibold text-[#990000]">
                  Managing Director
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700 hover:text-[#990000] transition group">
              <div className="p-3 bg-red-50 text-[#990000] rounded-xl group-hover:bg-[#990000] group-hover:text-white transition-colors flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <span>+88 01710 11 97 11</span>
                <FaWhatsapp className="text-green-600 text-lg" />
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700 hover:text-[#990000] transition group">
              <div className="p-3 bg-red-50 text-[#990000] rounded-xl group-hover:bg-[#990000] group-hover:text-white transition-colors flex-shrink-0">
                <FaEnvelope />
              </div>
              <span className="font-semibold text-slate-800">
                manik@texzonebd.com
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-700 hover:text-[#990000] transition group">
              <div className="p-3 bg-red-50 text-[#990000] rounded-xl group-hover:bg-[#990000] group-hover:text-white transition-colors flex-shrink-0">
                <FaGlobe />
              </div>
              <span className="font-semibold text-slate-800">
                www.texzonebd.com
              </span>
            </div>

            <div className="flex items-start gap-4 text-slate-700 hover:text-[#990000] transition group">
              <div className="p-3 bg-red-50 text-[#990000] rounded-xl group-hover:bg-[#990000] group-hover:text-white transition-colors flex-shrink-0 mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <strong className="block text-slate-900 font-bold text-sm">
                  Head Office:
                </strong>
                <span className="text-slate-600 text-sm leading-relaxed">
                  H#24/26, Lift-3C, R#10, Priyanka Runway City, Uttara, Dhaka.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 text-slate-700 hover:text-[#990000] transition group">
              <div className="p-3 bg-red-50 text-[#990000] rounded-xl group-hover:bg-[#990000] group-hover:text-white transition-colors flex-shrink-0 mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <strong className="block text-slate-900 font-bold text-sm">
                  Gazipur Office:
                </strong>
                <span className="text-slate-600 text-sm leading-relaxed">
                  B#147, Vogra, Gazipur City, Gazipur-1702.
                </span>
              </div>
            </div>
          </div>
        </div>
        <form className="flex-1 bg-stone-50 p-6 md:p-8 rounded-3xl border border-stone-200/80 flex flex-col justify-between space-y-4">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Send Us a Message
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3.5 bg-white rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#990000] focus:border-[#990000] outline-none transition text-slate-800 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. name@company.com"
              className="w-full px-4 py-3.5 bg-white rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#990000] focus:border-[#990000] outline-none transition text-slate-800 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your inquiry or fabric requirement here..."
              rows="4"
              className="w-full px-4 py-3.5 bg-white rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#990000] focus:border-[#990000] outline-none transition text-slate-800 text-sm"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-[#990000] hover:bg-red-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 transition duration-300 cursor-pointer"
          >
            Send Message <FaPaperPlane />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;