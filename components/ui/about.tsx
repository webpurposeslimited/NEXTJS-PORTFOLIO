"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCalendar, IconBriefcase, IconCode, IconSchool, IconBooks } from "@tabler/icons-react";
import Image from "next/image";

import { workExperience, educationData, aboutContent, skills } from "@/data";

// Use workExperience data directly from the centralized data file
// No need for manual transformation as it already contains all required fields



// Toggle Button Component
const ToggleButton = ({ active, onClick, icon, text }: { active: boolean; onClick: () => void; icon: React.ReactNode; text: string }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${active ? 'bg-gradient-to-r from-accentColors-primary/20 to-accentColors-accent/10 text-accentColors-primary border border-accentColors-primary/20' : 'text-zinc-400 hover:text-accentColors-accent border border-transparent hover:border-accentColors-accent/10'}`}
    >
      {icon}
      {text}
    </button>
  );
};

export function About() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 bg-zinc-900/30 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accentColors-primary/10 rounded-full filter blur-3xl opacity-30 animate-moveHorizontal will-change-transform" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accentColors-secondary/10 rounded-full filter blur-3xl opacity-20 animate-moveInCircle will-change-transform" />
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative inline-block">
            {aboutContent.sectionTitle}
            <motion.span 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accentColors-primary to-accentColors-highlight"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {aboutContent.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block p-1.5 rounded-lg bg-gradient-to-br from-accentColors-primary to-accentColors-accent/70"
              >
                <span className="block h-3 w-3 rounded-sm bg-background"></span>
              </motion.span>
              {aboutContent.journeyTitle}
            </h3>
            <div className="text-zinc-400 space-y-4">
              {aboutContent.journeyText.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                <IconCode size={18} className="text-accentColors-primary" />
                {aboutContent.skillsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-sm px-3 py-1.5 bg-zinc-800/80 text-zinc-200 rounded-full border border-zinc-700 hover:border-accentColors-primary/50 hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-accentColors-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Toggle Buttons */}
            <div className="flex items-center justify-start gap-3 sm:gap-4 mb-6 md:mb-8">
              <ToggleButton 
                active={activeTab === 'experience'}
                onClick={() => setActiveTab('experience')}
                icon={<IconBriefcase size={20} className={activeTab === 'experience' ? 'text-accentColors-accent' : ''} />}
                text={aboutContent.tabLabels.experience}
              />
              <ToggleButton 
                active={activeTab === 'education'}
                onClick={() => setActiveTab('education')}
                icon={<IconSchool size={20} className={activeTab === 'education' ? 'text-accentColors-accent' : ''} />}
                text={aboutContent.tabLabels.education}
              />
            </div>
            
            <AnimatePresence mode="wait">
              {activeTab === 'experience' ? (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                    <IconBriefcase size={22} className="text-accentColors-primary" />
                    {aboutContent.experienceTitle}
                  </h3>
                  {workExperience.map((exp, index) => (
                    <div key={index} className="relative pl-10 border-l border-zinc-700">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-accentColors-primary to-accentColors-secondary shadow-md shadow-accentColors-primary/50"
                      >
                        {/* Inner dot for added visual appeal */}
                        <span className="absolute inset-[2px] rounded-full bg-zinc-900 opacity-50"></span>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                        className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 p-6 rounded-lg border border-zinc-700/50 hover:border-accentColors-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accentColors-primary/10 group"
                      >
                        {/* Company logo/thumbnail with smooth hover animation */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br from-accentColors-primary/20 to-accentColors-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Image 
                                src={exp.thumbnail} 
                                alt={exp.company} 
                                width={24} 
                                height={24} 
                                className="w-6 h-6 object-contain" 
                              />
                            </div>
                            <div>
                              <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-accentColors-primary transition-colors duration-300">{exp.title}</h4>
                              <span className="text-accentColors-secondary/90 font-medium text-sm">{exp.company}</span>
                            </div>
                          </div>
                          <span className="text-zinc-400 text-sm flex items-center gap-1 bg-zinc-800/70 px-2 py-1 rounded-md group-hover:bg-accentColors-primary/10 group-hover:text-accentColors-primary transition-all duration-300">
                            <IconCalendar size={14} />
                            {exp.duration}
                          </span>
                        </div>
                        
                        {/* Description with slightly improved typography */}
                        <div className="mt-3">
                          <p className="text-zinc-300 text-sm leading-relaxed">{exp.desc}</p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                    <IconBooks size={22} className="text-accentColors-highlight" />
                    {aboutContent.educationTitle}
                  </h3>
                  {educationData.map((edu, index) => (
                    <div key={index} className="relative pl-10 border-l border-zinc-700">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-accentColors-accent to-accentColors-highlight shadow-sm shadow-accentColors-accent/50"
                      ></motion.div>
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                        className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50 hover:border-accentColors-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accentColors-accent/5"
                      >
                        <h4 className="text-base sm:text-lg font-semibold text-white">{edu.title}</h4>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-accentColors-secondary">{edu.institution}</span>
                          <span className="text-zinc-500 text-sm flex items-center gap-1">
                            <IconCalendar size={14} />
                            {edu.duration}
                          </span>
                        </div>
                        <p className="text-zinc-400 text-xs sm:text-sm">{edu.description}</p>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
