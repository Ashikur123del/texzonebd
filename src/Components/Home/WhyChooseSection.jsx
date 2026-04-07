import React from 'react';
import { FaFlask, FaFingerprint, FaTools } from 'react-icons/fa';
import factoryImg from '../../assets/sep.jpg'; // Path ঠিক করে নিন

const WhyChooseSection = () => {
  const points = [
    { t: "Free R&D Support", d: "Send us a photo or swatch, we reverse-engineer composition and construction for free.", icon: <FaFlask /> },
    { t: "4-Point Quality System", d: "Strict international inspection standards (yarn to finished) for 100% consistency.", icon: <FaFingerprint /> },
    { t: "Live Data Server", d: "Securely stored technical parameters ensuring identical match for repeat orders.", icon: <FaTools /> }
  ];

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
              Why Global Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Trust Tex Zone BD?</span>
            </h2>
            <div className="space-y-6">
              {points.map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                  <div className="w-16 h-16 shrink-0 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{item.t}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden border-[12px] border-slate-800/50 shadow-2xl">
              <img src={factoryImg} alt="Tex Zone Factory" className='w-full h-[500px] object-cover' />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 p-10 rounded-[2.5rem] z-20 shadow-xl hidden md:block">
              <p className="text-5xl font-black italic mb-1">100%</p>
              <p className="text-xs uppercase font-black tracking-[0.2em] opacity-80">Export Standard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;