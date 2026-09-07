import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendarAlt,
  FaFlask,
  FaCut,
  FaUsers,
  FaCogs,
  FaClipboardCheck,
  FaVial,
  FaBoxes,
} from "react-icons/fa";

const processSteps = [
  {
    step: "01",
    title: "Work Order Analysis",
    icon: FaSearch,
    desc: "We begin by carefully analyzing each work order and segregating materials to ensure a smooth production process.",
  },
  {
    step: "02",
    title: "Time & Action (TNA) Planning",
    icon: FaCalendarAlt,
    desc: "A detailed TNA plan is created based on the target delivery date, including Option A and Option B plans, which are shared with the customer for approval.",
  },
  {
    step: "03",
    title: "Yarn Sourcing & Initial Testing",
    icon: FaFlask,
    desc: "We procure the required yarns and test an initial 5 kg sample for: TPI (Twists Per Inch), Actual count, Thick & thin variations, Yarn Patta, Contamination and other critical factors.",
  },
  {
    step: "04",
    title: "Sample Fabric Production",
    icon: FaCut,
    desc: "A 5 kg sample fabric is produced using the specified yarns. Key parameters such as DIA, GSM, shrinkage, and twisting are tested. Customer approval is obtained if needed.",
  },
  {
    step: "05",
    title: "Pre-Production Meeting (PPM)",
    icon: FaUsers,
    desc: "Technical and quality teams review the sample report to finalize: Project plan, Follow-up points, Technical parameters.",
  },
  {
    step: "06",
    title: "Machine Preparation",
    icon: FaCogs,
    desc: "Knitting machines are inspected and set for production to ensure they are technically fit and ready for the project.",
  },
  {
    step: "07",
    title: "Knitting & Quality Checks",
    icon: FaClipboardCheck,
    desc: "Knitting programs are set according to DIA, color, and yarn lot ratio. All fabrics undergo 100% inspection under the 4-Point System. Each fabric is marked with textile markers to prevent mixing with other fabrics. Fabrics are then stored in individual bins with separate bin cards for each buyer.",
  },
  {
    step: "08",
    title: "Lab Dips & Dyeing Preparation",
    icon: FaVial,
    desc: "Lab dips for dyeing are developed separately and submitted to the customer for approval before actual dyeing begins.",
  },
  {
    step: "09",
    title: "Batch-to-Batch Sorting & Final Inspection",
    icon: FaBoxes,
    desc: "Once sufficient greige fabric is ready, it is sorted batch-to-batch. Each batch is re-checked for DIA, GSM, shrinkage, hand feel, shade variation, and color fastness. Comprehensive inspection reports are prepared for each batch, including the GSM chain and pre-production inspection results, and shared with the customer. A SID board / batch summary board is maintained to track each batch’s status clearly. Approved fabrics are dyed, finished, and undergo a final quality inspection before being prepared for delivery.",
  },
];

const FabricProductionProcess = () => {
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
    <div className="py-24  text-slate-900 font-sans relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-stone-200/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6  relative z-10">

        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-100 border border-red-200 text-[#990000] font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm"
          >
            OUR WORKFLOW
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 text-center"
          >
            FABRIC DEVELOPMENT, PLANNING & <br className="hidden md:block" />
            <span className="text-[#990000]">PRODUCTION PROCESS</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#990000] rounded-full mt-4" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            const isLastOddItem =
              index === processSteps.length - 1 && processSteps.length % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group bg-white p-6 md:p-8 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#990000]/40 transition-all duration-300 flex flex-col justify-between ${
                  isLastOddItem ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#990000] group-hover:bg-[#990000] group-hover:text-white transition-all flex items-center justify-center">
                      <Icon className="text-xl" />
                    </div>
                    <span className="text-2xl font-black text-stone-300 group-hover:text-[#990000] transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#990000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
      </section>
  );
};

export default FabricProductionProcess;