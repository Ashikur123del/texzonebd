import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 p-8 md:p-12 flex flex-col md:flex-row gap-12"
      >
        
        {/* Left Side: Info */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Let's Connect</h2>
            <p className="text-gray-600">আমাদের সাথে যোগাযোগের জন্য নিচে দেওয়া তথ্যগুলো ব্যবহার করুন অথবা সরাসরি ফর্মটি পূরণ করুন।</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition">
              <div className="p-3 bg-blue-100 rounded-xl"><FaMapMarkerAlt className="text-blue-600" /></div>
              <span>Uttara, Dhaka & Gazipur, Bangladesh</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition">
              <div className="p-3 bg-blue-100 rounded-xl"><FaPhoneAlt className="text-blue-600" /></div>
              <span>+8801710119711, +8801611847184</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition">
              <div className="p-3 bg-blue-100 rounded-xl"><FaEnvelope className="text-blue-600" /></div>
              <span>info@texzonebd.com</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="flex-1 space-y-5">
          <input type="text" placeholder="Name" className="w-full px-5 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 outline-none transition" />
          <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 outline-none transition" />
          <textarea placeholder="Message" rows="4" className="w-full px-5 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 outline-none transition"></textarea>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-blue-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition"
          >
            Send Message <FaPaperPlane />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;