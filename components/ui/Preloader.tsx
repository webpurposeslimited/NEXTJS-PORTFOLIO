"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state when component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to show main content
  const showContent = () => {
    const contentContainer = document.getElementById('content-container');
    if (contentContainer) {
      // First make it visible but still with opacity 0
      contentContainer.style.visibility = 'visible';
      contentContainer.style.opacity = '0';
      
      // Then fade it in
      setTimeout(() => {
        contentContainer.style.transition = 'opacity 0.5s ease';
        contentContainer.style.opacity = '1';
      }, 100);
    }
  };

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || !isMounted) return;
    
    // Use a larger initial delay to ensure the preloader is shown first
    const initialDelay = setTimeout(() => {
      // Function to finish loading
      const finishLoading = () => {
        // Wait a moment for animation purposes
        setTimeout(() => {
          setLoading(false);
          // Show the main content after preloader starts to fade out
          setTimeout(showContent, 300);
        }, 1000);
      };
      
      // Check if document is already fully loaded
      if (document.readyState === 'complete') {
        finishLoading();
      } else {
        // Wait for window load event
        window.addEventListener('load', finishLoading);
        return () => window.removeEventListener('load', finishLoading);
      }
    }, 1000); // Longer initial delay

    return () => clearTimeout(initialDelay);
  }, [isMounted]);

  if (typeof window === 'undefined' || !isMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-900"
        >
          <div className="flex flex-col items-center">
            {/* Loading animation using the provided GIF */}
            <div className="relative w-40 h-40 mb-6">
              <Image 
                src="/loader.gif" 
                alt="Loading animation"
                fill
                priority
                className="object-contain"
              />
            </div>
            
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-xl text-white font-medium"
            >
              Loading
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
