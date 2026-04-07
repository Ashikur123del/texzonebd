
import React from 'react';
import ServicesAll from './ServicesAll';
import WhyChooseSection from './WhyChooseSection';

const Services = () => {
  return (
    <div className="bg-[#0A0F1A]">
      <ServicesAll />
      <WhyChooseSection />
      <section className="py-24 container mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[4rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic text-white">
            Facing Fabric Issues? <br /> Get Free Technical Advice.
          </h2>
          <a href="tel:+8801710119711" className="inline-block px-12 py-5 bg-white text-blue-900 rounded-2xl font-black hover:scale-105 transition-all no-underline text-xl">
            Call: +880 1710 119711
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;