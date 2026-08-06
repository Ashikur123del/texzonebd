import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Comodo Fashion",
    role: "International Buying House",
    rating: 5,
    comment:
      "Tex Zone BD provides top-notch fabric quality and their on-time delivery commitment is exceptional. Their 4-point QC inspection system gave us complete confidence.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Teb Fashion",
    role: "Apparel Manufacturer",
    rating: 5,
    comment:
      "The R&D team's ability to reverse-engineer fabric swatches saved us a huge amount of time and cost. Their technical support hotline is always helpful.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "X-Tex Sourcing",
    role: "Global Sourcing Agent",
    rating: 5,
    comment:
      "Their data server system makes repeat orders completely seamless. We always get identical fabric specs without any shade variation issues.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Design Tex",
    role: "RMG Merchandising Head",
    rating: 5,
    comment:
      "We have worked with Tex Zone BD for all kinds of fancy knit fabrics. Their shade matching accuracy and batch inspection reports are truly professional.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Apparel Park",
    role: "Garments Director",
    rating: 5,
    comment:
      "Outstanding service and high precision in production. Their ability to handle both small and bulk orders with equal care is highly commendable.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-24 bg-stone-50 text-slate-900 font-sans relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="bg-red-100 border border-red-200 text-[#990000] font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
            WHAT OUR <span className="text-[#990000]">CLIENTS SAY</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#990000] rounded-full mt-4" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#990000]/40 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
                <FaQuoteLeft className="absolute top-6 right-6 text-stone-100 group-hover:text-red-50 text-5xl transition-colors pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-base" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed italic mb-8">
                    "{item.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-stone-100 pt-4 relative z-10 mt-auto">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#990000]"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#990000] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #990000;
          background-color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid #e7e5e4;
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background-color: #990000;
          width: 24px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;