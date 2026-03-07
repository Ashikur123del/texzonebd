import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { 
  FaStar, 
  FaUsers, 
  FaHandshake, 
  FaChartLine,
  FaQuoteRight,
  FaRegBuilding
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const  Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // For testing, trigger animations immediately
  const [animateNow, setAnimateNow] = React.useState(false);
  React.useEffect(() => {
    setAnimateNow(true);
  }, []);

  const brands = [
    { name: "COMODO", logo: "C", bg: "from-blue-500 to-blue-600" },
    { name: "FASHION TEB", logo: "FT", bg: "from-green-500 to-green-600" },
    { name: "X-TEX", logo: "X", bg: "from-purple-500 to-purple-600" },
    { name: "DESIGN TEX", logo: "DT", bg: "from-red-500 to-red-600" },
    { name: "APPAREL PARK", logo: "AP", bg: "from-yellow-500 to-yellow-600" },
    { name: "SILCEN", logo: "S", bg: "from-indigo-500 to-indigo-600" },
    { name: "BELL TEX", logo: "BT", bg: "from-pink-500 to-pink-600" },
    { name: "TFT BD SOURCING", logo: "TFT", bg: "from-teal-500 to-teal-600" }
  ];

  const testimonials = [
    {
      name: "John Doe",
      company: "Fashion Teb",
      position: "CEO",
      text: "Tex Zone BD has been our reliable partner for years. Their quality and timely delivery are exceptional. They understand our needs perfectly and always deliver beyond expectations.",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-successful-man_23-2149026293.jpg"
    },
    {
      name: "Jane Smith",
      company: "Design Tex", 
      position: "Production Manager",
      text: "The best fabric supplier in Bangladesh. Their R&D support helped us develop unique fabrics that set us apart in the market. Highly professional team!",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-successful-woman_23-2149026295.jpg"
    },
    {
      name: "Mike Johnson",
      company: "Apparel Park",
      position: "Director",
      text: "Professional team, excellent communication, and top-notch quality. Their 4-point inspection system gives us complete confidence in every shipment.",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-businessman_23-2149026297.jpg"
    },
    {
      name: "Sarah Rahman",
      company: "Silcen",
      position: "Sourcing Head",
      text: "Their imported fabric quality is outstanding. The team is very responsive and always meets our tight deadlines. Highly recommended!",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-business-woman_23-2149026299.jpg"
    }
  ];

  const stats = [
    { icon: FaUsers, value: "500+", label: "Happy Clients", suffix: "+" },
    { icon: FaHandshake, value: "50+", label: "Brand Partners", suffix: "+" },
    { icon: FaChartLine, value: "1000+", label: "Projects Completed", suffix: "+" },
    { icon: FaStar, value: "100", label: "Satisfaction", suffix: "%" }
  ];

  return (
    <div className="min-h-screen bg-base-100" ref={ref}>
      {/* Clients Hero with Animated Background */}
      <section className="relative py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"
          animate={{
            background: [
              "linear-gradient(45deg, #2A5C82, #4A8B5E)",
              "linear-gradient(135deg, #2A5C82, #4A8B5E)",
              "linear-gradient(225deg, #2A5C82, #4A8B5E)",
              "linear-gradient(315deg, #2A5C82, #4A8B5E)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={(animateNow || isInView) ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">Clients</span></h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-100">
              Trusted by leading local and international brands in the RMG sector
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats with Counter Animation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Counter = ({ value, suffix }) => {
                const [count, setCount] = React.useState(0);
                
                React.useEffect(() => {
                  if (isInView) {
                    const duration = 2000;
                    const steps = 60;
                    const increment = parseInt(value) / steps;
                    let current = 0;
                    
                    const timer = setInterval(() => {
                      current += increment;
                      if (current >= parseInt(value)) {
                        setCount(parseInt(value));
                        clearInterval(timer);
                      } else {
                        setCount(Math.floor(current));
                      }
                    }, duration / steps);
                    
                    return () => clearInterval(timer);
                  }
                }, [value]);
                
                return <span>{count}{suffix}</span>;
              };

              return (
                <motion.div
                  key={idx}
                  className="card bg-base-100 shadow-lg border border-base-200"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="card-body items-center text-center">
                    <stat.icon className="text-4xl text-primary mb-3" />
                    <div className="text-3xl font-bold text-primary">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-base-content/60">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Logos with 3D Effect */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={(animateNow || isInView) ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our Brand Partners
          </motion.h3>

          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="brands-swiper"
          >
            {brands.map((brand, idx) => (
              <SwiperSlide key={idx} style={{ width: '200px' }}>
                <motion.div
                  className={`card bg-gradient-to-r ${brand.bg} text-white shadow-xl`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card-body items-center justify-center h-40">
                    <div className="text-4xl font-bold mb-2">{brand.logo}</div>
                    <h4 className="text-sm font-semibold text-center">{brand.name}</h4>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials with 3D Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h3 
            className="text-4xl font-bold text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={(animateNow || isInView) ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            What Our Clients Say
          </motion.h3>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                  whileHover={{ y: -10, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="card-body">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-primary">{testimonial.position}</p>
                        <p className="text-xs text-base-content/60">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 text-warning mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="animate-pulse" />
                      ))}
                    </div>
                    
                    <div className="relative">
                      <FaQuoteRight className="absolute -top-2 -right-2 text-4xl text-base-content/10" />
                      <p className="text-base-content/70 italic relative z-10">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join our growing family of satisfied clients and experience the Tex Zone BD difference
            </p>
            <motion.button 
              className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;