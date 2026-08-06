import React from "react";
import { motion } from "framer-motion";

const printTypes = [
 { 
  name: "Pigment", 
  img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=300&auto=format&fit=crop" 
},
  { name: "Rubber", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=300&auto=format&fit=crop" },
  { name: "Discharge", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop" },
  { name: "Burn Out", img: "https://images.unsplash.com/photo-1509660933844-6910e12765a0?q=80&w=300&auto=format&fit=crop" },
  { name: "Glitter", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop" },
  { name: "Puff", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=300&auto=format&fit=crop" },
  { name: "Fluorescent", img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=300&auto=format&fit=crop" },
];

const AlloverPrintSection = () => {
  return (
    <section className="py-20 bg-white text-slate-900 font-sans selection:bg-[#990000] selection:text-white">
        <div className="container mx-auto px-6">
        <div className="mb-5">
      <div className="mb-6">
        <span className="text-[#990000] font-black uppercase tracking-widest text-xs block mb-1">
          MORE SERVICE
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-red-600 uppercase tracking-tight">
          ALLOVER PRINT
        </h2>
      </div>

      <p className="text-slate-700 text-base md:text-lg leading-relaxed text-justify mb-4">
        We offer advanced all over printing services using flatbed technologies, capable of printing continuous patterns across the entire fabric surface. With modern machinery and skilled technicians, we ensure sharp design accuracy, vibrant colors, and long-lasting prints. From fashion fabrics to customized designs, our all over printing delivers consistent quality for both small and bulk orders.
      </p>

      <p className="text-red-600 italic font-semibold text-sm md:text-base mb-8">
        Types of Printing: We can do all sorts of flat bed print except REACTIVE PRINT.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {printTypes.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-full h-32 sm:h-36 rounded-lg overflow-hidden border border-stone-200 shadow-sm group-hover:shadow-md group-hover:border-[#990000] transition-all bg-stone-100">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-bold text-slate-800 text-sm mt-2 text-center group-hover:text-[#990000] transition-colors">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
      <hr className="mt-16 border-t-2 border-red-500/30" />
    </div>
    </div>
    </section>
  );
};

export default AlloverPrintSection;