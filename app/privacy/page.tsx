"use client";

import React from "react";
import { motion } from "framer-motion";
import { legalContent } from "@/data";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-900 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accentColors-primary to-accentColors-secondary mb-4"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {legalContent.privacy.title}
          </motion.h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-accentColors-primary to-accentColors-secondary rounded-full"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-invert prose-zinc max-w-none"
        >
          <div className="bg-zinc-800/30 rounded-xl p-8 shadow-xl shadow-accentColors-primary/5 border border-zinc-700/50">
            <p className="text-zinc-300 mb-6">
              {legalContent.privacy.lastUpdated}
            </p>

            <div className="space-y-8">
              {legalContent.privacy.sections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-zinc-300 mb-4">
                    {section.content}
                  </p>
                  {section.listItems && (
                    <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                      {section.listItems.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-700/50">
              <a href="/" className="text-accentColors-primary hover:text-accentColors-secondary transition-colors">
                ← Back to Home
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
