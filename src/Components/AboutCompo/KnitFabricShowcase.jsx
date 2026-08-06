import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const fabricItems = [
  "Single Jersey",
  "Pique",
  "Lacoste",
  "Rib (All Items)",
  "Interlock",
  "Fleece",
  "Terry",
  "Honeycomb",
  "Mesh",
  "Jacquard Knit",
  "Eng Stripe",
  "Waffle",
  "Lycra Jersey (Spandex Mixed)",
];

const KnitFabricShowcase = () => {
  return (
    <section className="py-20 bg-white text-slate-800 font-sans">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-700">
            KNIT FABRICS{" "}
            <span className="text-red-600">MANUFACTURING SUPPLY</span>
          </h2>
        </div>
        <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed text-justify mb-10">
          <p>
            We manufacture and supply all types of knit fabrics, with{" "}
            <span className="text-red-600 font-bold">
              fancy and specialty fabrics being our core strength
            </span>
            . Even with a small sample or just a picture, we can produce exactly
            what our clients need.
          </p>

          <p>
            <span className="text-red-600 font-bold">
              We are capable of delivering any quantity of fabric within the
              buyer’s required timeframe
            </span>{" "}
            because we source from multiple international-standard composite
            factories. All our fabrics strictly follow buyer quality standards
            and undergo all required testing to meet global RMG expectations.
            From production to final shipment, we provide full support,
            ensuring a smooth and reliable experience for every client.
          </p>

          <p>
            Our commitment to{" "}
            <span className="text-red-600 font-bold">
              quality, consistency, and timely delivery
            </span>{" "}
            makes us a trusted partner in the textile industry.
          </p>
        </div>
        <div className="mb-8 border-b-2 border-stone-300 pb-2">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
            We Make All Types of Single Jersey, Double Jersey, and Custom Design
            Fabrics
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <ul className="space-y-3 mb-8">
              {fabricItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-800 font-bold text-lg md:text-xl group hover:text-red-600 transition-colors"
                >
                  <FaAngleDoubleRight className="text-red-600 flex-shrink-0 text-xl" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-2 border-red-500 rounded-3xl p-4 text-center max-w-md bg-stone-50/50 shadow-sm">
              <h4 className="text-red-600 font-black text-xl tracking-wider uppercase mb-1">
                DYEING CONTRACT
              </h4>
              <p className="text-slate-700 text-xs md:text-sm font-semibold">
                If you provide us with grey fabrics, we offer dyeing services
                on a contract basis.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-md h-64 md:h-72">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
                alt="Knitting Circular Machine"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-md h-64 md:h-72">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                alt="Dyeing Factory Floor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnitFabricShowcase;