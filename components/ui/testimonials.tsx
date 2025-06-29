"use client";

import React from "react";
import { motion } from "framer-motion";
import { contactContent } from "@/data";
import TestimonialCard from "./TestimonialCard";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 bg-zinc-900/30 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-accentColors-primary/5 rounded-full filter blur-[120px] opacity-40 animate-moveInCircle will-change-transform" />
        <div className="absolute bottom-1/3 right-1/4 w-[25rem] h-[25rem] bg-accentColors-secondary/5 rounded-full filter blur-[100px] opacity-30 animate-moveHorizontal will-change-transform" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{contactContent.testimonials.title}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
            {contactContent.testimonials.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((index) => (
              <TestimonialCard key={index} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
