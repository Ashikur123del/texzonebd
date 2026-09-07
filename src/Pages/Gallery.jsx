import React, { useState } from "react";
import { FaBookOpen, FaTimes, FaCalendarAlt, FaUser } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

// Apnar Image Import gulo
import g1 from "../assets/ab-3.jpeg";
import g2 from "../assets/ap-1.jpeg";
import g3 from "../assets/ap-2.jpeg";
import g4 from "../assets/ap-5.jpeg";
import g5 from "../assets/FC-4.jpeg";
import g6 from "../assets/FC-8.jpeg";
import g7 from "../assets/FC-7.jpeg";
import g8 from "../assets/FC-2.jpeg";
import g9 from "../assets/FC-5.jpeg";
import g10 from "../assets/K-2.jfif";
import g11 from "../assets/K-2.jfif";
import g12 from "../assets/Kn-2.jpeg";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      img: g1,
      title: "Sustainable Apparel Manufacturing Practices in 2026",
      date: "September 05, 2026",
      author: "Admin",
      excerpt: "Explore how modern garment factories are adopting eco-friendly processes to reduce carbon footprints...",
      content: "Detailed blog content goes here. Eco-friendly dyeing techniques, renewable energy integration, and waste minimization in textile manufacturing are driving sustainable transformation across our production lines.",
    },
    {
      id: 2,
      img: g2,
      title: "Garment Industry Innovations & Automation",
      date: "August 28, 2026",
      author: "Tech Team",
      excerpt: "Discover the latest cutting-edge machinery and automated workflows enhancing efficiency...",
      content: "Automation in fabric cutting, automated sewing units, and real-time Quality Control systems have significantly increased capacity and precision in apparel manufacturing.",
    },
    {
      id: 3,
      img: g3,
      title: "Sourcing High-Quality Fabrics for Global Brands",
      date: "August 20, 2026",
      author: "Sourcing Dept",
      excerpt: "A comprehensive guide on sourcing knitwear, denim, and specialized fabrics efficiently...",
      content: "Strategic fabric sourcing ensures maximum durability, softness, and regulatory compliance. Learn how our network sources top-tier raw materials globally.",
    },
    {
      id: 4,
      img: g4,
      title: "Navigating RMG Export Trends and Logistics",
      date: "August 12, 2026",
      author: "Export Team",
      excerpt: "Understanding the evolving international trade compliance and supply chain dynamics...",
      content: "Efficient supply chain management and compliance with international trade regulations enable timely delivery to global buyers across Europe and the US.",
    },
    {
      id: 5,
      img: g5,
      title: "Workplace Safety & Ethical Labor Standards",
      date: "August 02, 2026",
      author: "HR & Safety",
      excerpt: "Ensuring worker safety, fair wages, and ethical standards across manufacturing units...",
      content: "Creating a secure, healthy, and fair work culture guarantees high productivity while adhering strictly to global compliance standardizations.",
    },
    {
      id: 6,
      img: g6,
      title: "The Future of Smart Textiles & Activewear",
      date: "July 25, 2026",
      author: "R&D Team",
      excerpt: "How performance fabrics and moisture-wicking technology are shaping activewear trends...",
      content: "Smart textiles integrated with anti-bacterial coatings and moisture management technology are reshaping sportswear and technical apparel.",
    },
    {
      id: 7,
      img: g7,
      title: "Quality Assurance in Ready-Made Garments",
      date: "July 18, 2026",
      author: "QA Manager",
      excerpt: "Inside our 4-point inspection system ensuring zero-defect production for global buyers...",
      content: "Comprehensive quality checks at raw fabric, inline assembly, and post-sewing stages ensure global quality standards are consistently fulfilled.",
    },
    {
      id: 8,
      img: g8,
      title: "Modern Dyeing and Finishing Innovations",
      date: "July 10, 2026",
      author: "Textile Eng",
      excerpt: "Reducing water usage using low-liquor ratio dyeing machines and water recycling...",
      content: "Our zero-liquid discharge and water recycling systems substantially cut down environmental pollution while delivering vibrant color consistency.",
    },
    {
      id: 9,
      img: g9,
      title: "Designing Fast Fashion with Sustainable Materials",
      date: "July 01, 2026",
      author: "Design Team",
      excerpt: "Combining trendy apparel designs with organic cotton and recycled polyester...",
      content: "Integrating circular fashion concepts allows rapid sample prototyping without increasing textile landfill waste.",
    },
    {
      id: 10,
      img: g10,
      title: "Building Strong Buyer Relationships in Textiles",
      date: "June 22, 2026",
      author: "Business Dept",
      excerpt: "Key strategies for maintaining trust, transparency, and long-term buyer partnerships...",
      content: "Transparent communication, on-time shipment tracking, and competitive pricing are key factors in maintaining trust with worldwide fashion brands.",
    },
    {
      id: 11,
      img: g11,
      title: "Understanding Fabric Types: Knit vs Woven",
      date: "June 15, 2026",
      author: "Fabric Specialist",
      excerpt: "A complete guide on fabric characteristics, GSM values, and garment applications...",
      content: "Comparing elasticity, breathability, and structural durability of knitted vs woven materials for optimal apparel selection.",
    },
    {
      id: 12,
      img: g12,
      title: "Optimizing Apparel Supply Chain Efficiency",
      date: "June 05, 2026",
      author: "Operations",
      excerpt: "Streamlining raw material procurement to final shipment dispatch seamlessly...",
      content: "Digital ERP management systems streamline order scheduling, inventory tracking, and container load optimization for maximum efficiency.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/40 py-12 md:py-16">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-full w-full rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(245,158,11,0.08),transparent_30%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-black text-[#990000] bg-red-100/60 px-3 py-1 rounded-full inline-block mb-3">
            Industry Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#990000]">
            Our Latest <span className="text-slate-900">Blogs & News</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-base md:text-lg">
            Stay updated with the latest trends, manufacturing insights, and news from our apparel manufacturing ecosystem.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 flex flex-col transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setSelectedPost(post)}>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                  <FaCalendarAlt className="text-emerald-600" />
                  {post.date}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <FaUser className="text-emerald-600" />
                    <span>By {post.author}</span>
                  </div>
                  <h3
                    onClick={() => setSelectedPost(post)}
                    className="text-xl font-bold text-slate-900 hover:text-[#990000] cursor-pointer transition-colors line-clamp-2 mb-3"
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#990000] hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <FaBookOpen />
                  Read Full Article
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4 backdrop-blur-sm">
            {/* Click backdrop to close */}
            <div className="absolute inset-0" onClick={() => setSelectedPost(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-black/60 text-white hover:bg-[#990000] w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <FaTimes size={18} />
              </button>

              {/* Modal Banner */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
                <img
                  src={selectedPost.img}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                      {selectedPost.date} • By {selectedPost.author}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
                      {selectedPost.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-slate-700 leading-relaxed">
                <p className="text-lg font-medium text-slate-900 italic border-l-4 border-[#990000] pl-4 bg-slate-50 py-2">
                  "{selectedPost.excerpt}"
                </p>
                <p>{selectedPost.content}</p>
                <p>
                  Continuous innovation in apparel production ensures optimal lead times, eco-compliance, and premium quality output. Stay connected with our platform for more industry updates.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;