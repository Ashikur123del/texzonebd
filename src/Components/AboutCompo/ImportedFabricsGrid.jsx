import React from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

const fabricItems = [
  "TAFFETA",
  "RIPSTOP",
  "SATIN",
  "PONGEE",
  "OXFORD",
  "TWILL",
  "TASLANE",
  "VISCOSE",
  "CHIFFON",
  "MICROFIBER",
  "CANVAS",
  "FLEECE",
  "TRICOT",
  "JERSEY",
  "SHERPA",
  "TERRY",
  "PIQUE",
  "COTTON-SPANDEX",
  "VELVET",
  "MESH",
  "SOFTSHELL",
  "INTERLOCK",
];

const fabricGallery = [
  {
    title: "SCUBA FABRIC",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "VISCOSE POPLIN AOP",
    img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "FLEECE FABRIC",
    img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "POLYESTER WOVEN AOP",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "MUSLIN FABRIC",
    img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "SOLID, Y/D KNIT",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop",
  },
{
  title: "VELOUR",
  img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=600&auto=format&fit=crop",
},
  {
    title: "DENIM",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop",
  },
];

const ImportedFabricsGrid = () => {
  return (
    <section className="pb-24 container mx-auto px-6">
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#990000] font-bold uppercase tracking-widest text-sm">
            Swatches Showcase
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">
            Featured Fabric Samples
          </h3>
          <div className="w-16 h-1 bg-[#990000] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {fabricGallery.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white p-3 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-sm border border-stone-300 text-slate-900 font-black text-xs px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                {item.title}
              </div>
              <div className="h-64 sm:h-72 w-full overflow-hidden rounded-xl bg-stone-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="w-3.5 h-3.5 rounded-full bg-[#990000]" />
          Available Imported Fabric Varieties:
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {fabricItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm hover:shadow-md hover:border-[#990000] transition-all cursor-pointer"
          >
            <div className="p-2 bg-red-50 rounded-lg text-[#990000] group-hover:bg-[#990000] group-hover:text-white transition-colors">
              <HiSparkles size={18} />
            </div>
            <span className="font-bold text-slate-800 text-sm group-hover:text-[#990000] transition-colors">
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="p-8 md:p-10 bg-gradient-to-r from-[#990000] to-red-900 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-200">
            Bespoke Solutions
          </span>
          <h4 className="text-2xl md:text-3xl font-black mt-1">
            ANY DESIGN AND CUSTOMIZED FABRICS
          </h4>
          <p className="text-red-100 mt-2 max-w-2xl text-sm md:text-base">
            Need a specific blend, weave, or texture? Share your tech pack or
            reference sample and we will customize it as per your exact
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImportedFabricsGrid;
