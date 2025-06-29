"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Button hover effect component 
export function HoverButton({ 
  children, 
  onClick, 
  className = '',
  ...props 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  [key: string]: any;
}) {
  return (
    <motion.button
      className={`relative inline-block px-6 py-3 overflow-hidden rounded-md ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      {...props}
    >
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-accentColors-primary/20 to-accentColors-secondary/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span 
        className="relative z-10 block"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

// Text reveal animation component
export function RevealText({ 
  text, 
  className = '',
  delay = 0 
}: { 
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          ease: [0.6, 0.01, -0.05, 0.95],
          delay 
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

// Hover card effect
export function HoverCard({ 
  children,
  className = '' 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`p-6 rounded-xl ${className}`}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
}

// Floating elements animation
export function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  y = 10,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -y, 0],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

// Shimmer effect on hover
export function ShimmerElement({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
    >
      {children}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        variants={{
          hover: {
            x: "200%",
            transition: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.5,
              ease: "linear",
            },
          },
        }}
      />
    </motion.div>
  );
}
