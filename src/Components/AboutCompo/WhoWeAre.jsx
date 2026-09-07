import React from "react";
import { motion  } from "framer-motion";
import {
  FaCheckCircle,
  FaAward,
  FaTools,
  FaHandshake,
  FaMicrochip,
  FaLeaf,
  FaUsers,
  FaChartLine,
  FaGlobeAsia,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const coreValues = [
  { icon: FaCheckCircle, title: "Quality Excellence", desc: "We prioritize superior quality in every fabric and service we provide." },
  { icon: FaUsers, title: "Customer Focus", desc: "Our client’s success drives our business; we listen and respond to their needs." },
  { icon: FaHandshake, title: "Integrity", desc: "We conduct business honestly and transparently, building trust with partners." },
  { icon: FaMicrochip, title: "Innovation", desc: "We embrace new technologies and ideas to stay ahead in the textile industry." },
  { icon: FaChartLine, title: "Reliability", desc: "Timely delivery and consistent performance are promises we keep." },
  { icon: FaLeaf, title: "Sustainability", desc: "We are committed to environmentally responsible practices across all operations." },
  { icon: FaUsers, title: "Collaboration", desc: "We believe in strong partnerships and teamwork to achieve mutual growth." },
  { icon: FaTools, title: "Improvement", desc: "We constantly seek ways to improve our products, services, and processes." },
];

const WhoWeAre = () => {
  return (
    <> 
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
      <div className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-7/12">
            <div className="inline-block px-3.5 py-1 bg-red-50 text-[#990000] font-bold rounded-lg text-sm mb-4 border border-red-100">
              WHO WE ARE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              A Reliable  Textile <span className="text-[#990000]"> Solution Provider</span> in Bangladesh
            </h2>
            <p className="text-lg text-slate-700 mb-6 text-justify leading-relaxed">
              <strong className="text-slate-900">Tex Zone BD</strong> is a leading name in the garment and textile industry, offering premium fabric sourcing, manufacturing, and support services. We specialize in high-quality knit fabrics—both in-house and imported—to meet diverse apparel production needs with consistency and care.
            </p>
            <p className="text-lg text-slate-700 text-justify leading-relaxed">
              Beyond fabric supply, we provide end-to-end services including contract knitting, dyeing, all-over printing, and fabric repairing. We deliver more than just fabric — we deliver solutions that simplify and strengthen your production process.
            </p>
          </div>

          <div className="lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="bg-gradient-to-br from-[#990000] to-red-800 p-8 rounded-3xl text-white shadow-xl shadow-red-950/10 flex flex-col justify-between transform hover:-translate-y-2 transition-all">
              <span className="text-5xl font-black">100%</span>
              <div className="mt-8">
                <h4 className="font-bold text-lg">Export Oriented</h4>
                <p className="text-red-100 text-sm mt-1">Meeting global quality standard specs.</p>
              </div>
            </div>

            <div className="bg-stone-900 p-8 rounded-3xl text-white shadow-xl shadow-stone-900/10 flex flex-col justify-between transform hover:-translate-y-2 transition-all border border-stone-800">
              <span className="text-3xl font-black text-red-500">Premium</span>
              <div className="mt-8">
                <h4 className="font-bold text-lg">Quality Sourcing</h4>
                <p className="text-stone-400 text-sm mt-1">In-house and global yarn/fabric supply.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className=" py-10  bg-stone-100/70">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-red-950/5 transition-all border border-stone-200/80 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#990000]" />
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-[#990000] mb-6 group-hover:scale-110 transition-transform">
              <FaAward className="text-3xl" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">MISSION</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Tex Zone BD is committed to delivering premium fabrics and complete textile solutions that help our clients succeed in a competitive global market. We focus on quality, timely delivery, innovation, and sustainable practices to support your growth every step of the way.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-amber-950/5 transition-all border border-stone-200/80 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-600" />
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
              <FaGlobeAsia className="text-3xl" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">VISION</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              We aim to be a trusted and leading textile brand in Bangladesh and beyond, known for excellence, ethical business, and innovative solutions that add real value to the supply chain. Through continuous improvement and strong partnerships, we strive to shape a sustainable future for the industry.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#990000] font-bold uppercase tracking-widest text-sm">What Drives Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Our Core Values</h2>
          <div className="w-16 h-1.5 bg-[#990000] mx-auto mt-4 rounded-full" />
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, i) => (
            <motion.div key={i} variants={fadeInUp} className="group p-8 bg-white rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-red-900/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-stone-100 group-hover:bg-[#990000] text-stone-700 group-hover:text-white transition-all duration-300 mb-6">
                <v.icon className="text-2xl" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-[#990000] transition-colors">{v.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
          </motion.div>
          </section>
      </section>
    </>
  );
};

export default WhoWeAre;