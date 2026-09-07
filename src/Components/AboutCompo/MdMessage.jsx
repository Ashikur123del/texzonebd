import { FaQuoteLeft } from "react-icons/fa";
import Manik from "../../assets/ManikMiya.png";

const MdMessage = () => {
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
    <div className="py-20 text-slate-900 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-red-900/10 flex flex-col lg:flex-row items-center gap-12 shadow-xl shadow-red-950/5">
          {/* Image Container */}
          <div className="lg:w-4/12 relative w-full h-[380px] md:h-[420px]">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#990000] to-red-600 rounded-[2.5rem] opacity-25 blur-lg" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-md">
              <img
                src={Manik}
                alt="MD Manik Sorder"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Content Wrapper */}
          <div className="lg:w-8/12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-red-50 text-[#990000] mb-6 shadow-sm">
              <FaQuoteLeft className="text-xl" />
            </div>

            <span className="block text-[#990000] font-bold uppercase tracking-widest text-xs mb-2">
              Leadership Statement
            </span>

            <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
              Message from Managing Director
            </h3>

            <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg text-justify font-normal">
              At Tex Zone BD, we strongly believe that quality is the foundation of every successful business. Since our beginning, our main goal has been to provide high-quality fabrics and reliable services that help our customers grow and compete in both local and international markets. We always work hard to deliver the best products on time, every time. With the support of our skilled team and trusted partners, we offer not only knit and imported fabrics but also a wide range of extra services such as contract knitting, dyeing, printing, embroidery, and fabric repairing. Our mission is to make the entire production process easier and more efficient for our clients. We are very proud of the trust our customers have placed in us over the years. We promise to continue working honestly, with full dedication and care, to meet your needs and exceed your expectations. Together, we can grow stronger and face future challenges with confidence.
            </p>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-wide">
                  MD Manik Sorder
                </h4>
                <p className="text-[#990000] font-bold text-xs uppercase tracking-widest mt-1">
                  Managing Director, Tex Zone BD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
  );
};

export default MdMessage;