import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    { 
      t: "End-to-End Textile Solutions", 
      d: "From fabric manufacturing to finishing services, we offer everything under one roof, streamlining your supply chain and making production hassle-free." 
    },
    { 
      t: "Reliable On-Time Delivery", 
      d: "Time is money in the apparel industry. We commit to on-time delivery to keep your production schedule on track." 
    },
    { 
      t: "Global Sourcing Network", 
      d: "With strong connections to international suppliers, we provide access to a wide range of imported fabrics and raw materials." 
    },
    { 
      t: "4-Point Quality Control", 
      d: "Our QC department operates with precision at every stage—from yarn to finished goods—using the internationally recognized 4-point inspection system. Every batch undergoes multiple levels of checks, and comprehensive inspection reports are provided to customers, ensuring trust and consistency in quality." 
    },
    { 
      t: "Advanced R&D Support", 
      d: "Our R&D team can reverse-engineer any fabric if you provide a swatch or even just a photo. We determine composition, yarn selection, fabric type, construction method, and cost, while also advising on ways to reduce production costs. This service is provided completely free of charge" 
    },
    { 
      t: "Secure Data Server", 
      d: "We maintain a well-organized data server where all technical parameters—from initial development to any small or large quantity—are securely stored. For repeat orders, we can produce fabrics exactly according to previous specifications, ensuring an identical match with earlier fabrics. Buyers can also request their data at any time, and we provide it promptly." 
    },
    { 
      t: "Flexible & Scalable", 
      d: "Whether it’s small batch orders or large-volume contracts, we adapt to your needs with the same level of attention and professionalism." 
    },
    { 
      t: "Experienced Professionals", 
      d: "Our dedicated professionals bring deep industry knowledge and hands-on expertise to ensure smooth service and communication." 
    },
    { 
      t: "Customer-Centric Focus", 
      d: "Your satisfaction is our success. We focus on building long-term relationships through transparency, support, and responsiveness." 
    },
    { 
      t: "Free Technical Hotline", 
      d: "Client or not, you can call our hotline for expert advice on any fabric-related issues—completely free of charge." 
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#f28e2c] via-[#bd20ad] to-[#a83279] text-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight drop-shadow-lg"
          >
            Why Choose Tex Zone BD?
          </motion.h2>
          <div className="mt-4 w-20 h-1.5 bg-white/40 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              /* 
                 Smart Glassmorphism Card:
                 - bg-white/10: হালকা সাদা ট্রান্সপারেন্সি
                 - backdrop-blur-md: ব্যাকগ্রাউন্ড ঝাপসা করে দেয়
                 - border-white/20: সূক্ষ্ম বর্ডার
              */
              className="group relative bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* কার্ডের ভেতরে একটি হালকা শাইন ইফেক্ট */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-white/10 to-white/30 flex items-center justify-center border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3 leading-tight tracking-wide">
                  {item.t}
                </h4>
                <p className="text-white/80 leading-relaxed text-sm font-light">
                  {item.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 p-1 bg-white/20 rounded-[2.5rem] max-w-4xl mx-auto"
        >
          <div className="bg-[#1e293b]/40 backdrop-blur-xl p-10 rounded-[2.4rem] text-center border border-white/10">
            <h3 className="text-2xl font-bold mb-3 tracking-wide">Facing Fabric Challenges?</h3>
            <p className="text-white/80 text-lg italic">
              "Whether you are our client or not, call our hotline for 
              <span className="text-[#f28e2c] font-bold"> Free Technical Advice</span>. We're here to help."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;