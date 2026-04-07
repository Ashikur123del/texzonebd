import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${service.bg} h-full rounded-[2.5rem] p-1 border border-white/10 overflow-hidden group hover:border-blue-500/50 transition-all duration-500 shadow-2xl flex flex-col mx-2`}
    >
      <div className="relative h-64 shrink-0 overflow-hidden rounded-t-[2.3rem]">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-8 right-4">
          <div className="text-amber-500 text-3xl mb-2">{service.icon}</div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
            {service.title}
          </h3>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-blue-400 font-bold mb-4 text-xs uppercase tracking-[0.2em]">
          {service.subtitle}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 flex-grow">
          {service.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
              <FaCheckCircle className="text-blue-500 shrink-0 text-[10px]" /> 
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-4 mt-auto rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-400 transition-all font-bold flex items-center justify-center gap-3 group">
          Explore Details 
          <FaArrowRight className="group-hover:translate-x-2 transition-transform text-sm" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;