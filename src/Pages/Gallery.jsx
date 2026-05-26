import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa"; 
import { AnimatePresence } from "framer-motion"; // 👈 এই ইমপোর্টটি এখন যোগ করা হয়েছে

// আপনার ইমেজ ইমপোর্টগুলো
import g1 from "../assets/G-1.jpeg";
import g2 from "../assets/G-2.jpeg";
import g3 from "../assets/G-3.jpeg";
import g4 from "../assets/G-4.jpeg";
import g5 from "../assets/G-5.jpeg";
import g6 from "../assets/G-6.jpeg";
import g7 from "../assets/G-7.jpeg";
import g8 from "../assets/G-8.jpeg";
import g9 from "../assets/G-9.jpeg";
import g10 from "../assets/G-10.jpeg";
import g11 from "../assets/G-11.jpeg";
import g12 from "../assets/G-12.jpeg";

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const galleryItems = [
    { id: 1, img: g1, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, img: g2, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, img: g3, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, img: g4, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, img: g5, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 6, img: g6, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 7, img: g7, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 8, img: g8, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 9, img: g9, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 10, img: g10, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 11, img: g11, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 12, img: g12, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  return (
    <div className="bg-base-200 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-neutral-content mb-3 uppercase tracking-wide">
            Our Media Gallery
          </h1>
          <p className="text-gray-500 max-w-md mx-auto">
            Click on any image to watch our commercial and factory showcase videos.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item.videoUrl)}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-base-100 cursor-pointer aspect-video"
            >
              <img
                src={item.img}
                alt={`Gallery-${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FaPlay className="ml-1 text-lg text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

         
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setSelectedVideo(null)} />

            <div className="relative bg-black w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-black/60 text-white hover:bg-primary hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20"
              >
                <FaTimes size={18} />
              </button>

              <iframe
                className="w-full h-full"
                src={`${selectedVideo}?autoplay=1`}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;