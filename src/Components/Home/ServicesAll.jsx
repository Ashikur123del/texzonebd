import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaIndustry, FaShip, FaCogs, FaMicroscope, FaTools, FaHeadset } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Assets
import img1 from '../../assets/f1.jpg';
import img2 from '../../assets/f2.jpg';
import img3 from '../../assets/sep.jpg';
import img4 from '../../assets/im-1.jpg';
import img5 from '../../assets/im-2.jpg';

const ServicesAll = () => {
  const servicesData = [
    { title: "Knit Manufacturing", subtitle: "Fancy & Specialty Fabrics", icon: <FaIndustry />, items: ["Single Jersey", "Lacoste", "Interlock", "Fleece", "Rib Items", "Jacquard"], bg: "bg-[#1e293b]", img: img1 },
    { title: "Imported Fabrics", subtitle: "China Sourcing Hub", icon: <FaShip />, items: ["Taffeta", "Ribstop", "Softshell", "Microfiber", "Canvas", "Taslane"], bg: "bg-[#0f172a]", img: img2 },
    { title: "Technical Processing", subtitle: "Dyeing & Printing", icon: <FaCogs />, items: ["All-over Print", "Contract Dyeing", "Shade Correction", "Fabric Repair"], bg: "bg-[#1e293b]", img: img3 },
    { title: "R&D & Development", subtitle: "Reverse Engineering", icon: <FaMicroscope />, items: ["Fabric Analysis", "Yarn Selection", "Cost Optimization", "Swatch Replication", "Free R&D"], bg: "bg-[#0f172a]", img: img4 },
    { title: "Supply Chain Solutions", subtitle: "End-to-End Support", icon: <FaTools />, items: ["Order Analysis", "TNA Planning", "4-Point QC", "Data Storage", "Lab Dips"], bg: "bg-[#1e293b]", img: img5 }
  ];

  return (
    <div className="bg-[#0A0F1A] text-white py-20 overflow-hidden font-sans">
      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our 360° Expertise</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Textile Solutions</span>
          </h1>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-16"
        >
          {servicesData.map((s, i) => (
            <SwiperSlide key={i} className="h-auto">
              <ServiceCard service={s} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesAll;