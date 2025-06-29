"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconQuote } from "@tabler/icons-react";
import Image from "next/image";
import { testimonials } from "@/data";

interface TestimonialProps {
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ index }) => {
  const testimonial = testimonials[index];
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 216, 255, 0.1)' }}
      onClick={toggleExpand}
      className="bg-zinc-800/30 p-6 rounded-xl border border-zinc-700/50 hover:border-accentColors-primary/20 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-accentColors-primary/5 cursor-pointer"
    >
      <div className="flex mb-4">
        <div className="p-3 bg-zinc-800 rounded-lg text-white">
          <IconQuote size={20} />
        </div>
      </div>
      <motion.p 
        className="text-zinc-300 mb-6 flex-grow text-sm md:text-base"
        animate={{ height: expanded ? 'auto' : '4.5rem' }}
        transition={{ duration: 0.3 }}
      >
        {expanded ? testimonial.quote : 
          (testimonial.quote.length > 150 
            ? `${testimonial.quote.substring(0, 150)}...` 
            : testimonial.quote)}
      </motion.p>
      
      {/* Click to expand indicator with updated animation direction */}
      {testimonial.quote.length > 150 && (
        <div className="mb-4 text-center">
          <span className="text-xs text-accentColors-primary flex items-center justify-center gap-1">
            {expanded ? (
              <>Click to collapse <motion.span 
                animate={{ y: [0, -3, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}>
                ↑
              </motion.span></>
            ) : (
              <>Click to expand <motion.span 
                animate={{ y: [0, 3, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}>
                ↓
              </motion.span></>
            )}
          </span>
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className="relative w-10 h-10 rounded-full overflow-hidden mb-2">
          <Image 
            src={testimonial.img} 
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center">
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <p className="text-zinc-400 text-sm">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
