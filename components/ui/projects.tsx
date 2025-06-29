"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
// Icons removed as per request
import { projects, projectsContent } from "@/data";
import { ProjectCardSkeleton } from "./Skeleton";

// Transform existing project data to match the new format
const enhancedProjects = projects.map(project => {
  // Extract technology names from icon paths
  const getTechName = (iconPath: string) => {
    const filename = iconPath.split('/').pop()?.split('.')[0];
    switch(filename) {
      case 're': return 'React';
      case 'next': return 'Next.js';
      case 'tail': return 'Tailwind CSS';
      case 'ts': return 'TypeScript';
      case 'node': return 'Node.js';
      case 'three': return 'Three.js';
      case 'gsap': return 'GSAP';
      case 'c': return 'Cloudinary';
      case 'stream': return 'Streamline';
      default: return filename || '';
    }
  };

  // Use featured property from data file

  return {
    ...project,
    description: project.des,
    tags: project.iconLists?.map(getTechName) || [],
    image: project.img,
    featured: project.featured
  };
});

export function Projects() {
  // Only keep the states we need
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [activeId, setActiveId] = useState<number | null>(null);
  
  const filteredProjectsList = filter === "all" 
    ? enhancedProjects 
    : enhancedProjects.filter(project => project.featured);
    
  useEffect(() => {
    // Simulate loading for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-accentColors-primary/5 rounded-full filter blur-[100px] animate-moveInCircle will-change-transform" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30rem] h-[30rem] bg-accentColors-secondary/5 rounded-full filter blur-[80px] animate-moveHorizontal will-change-transform" />
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
            {projectsContent.sectionTitle}
            <motion.span 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accentColors-primary to-accentColors-highlight"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {projectsContent.description}
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-zinc-800/50 p-1 rounded-lg shadow-lg shadow-accentColors-primary/5">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`inline-block px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-all duration-300 ${filter === "all" ? 
                "bg-gradient-to-r from-accentColors-primary to-accentColors-secondary text-white border border-accentColors-primary shadow-md shadow-accentColors-primary/20" : 
                "bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 hover:text-accentColors-primary"}`}
              onClick={() => setFilter("all")}
            >
              {projectsContent.filterLabels.all}
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`inline-block px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-all duration-300 ${filter === "featured" ? 
                "bg-gradient-to-r from-accentColors-primary to-accentColors-secondary text-white border border-accentColors-primary shadow-md shadow-accentColors-primary/20" : 
                "bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 hover:text-accentColors-primary"}`}
              onClick={() => setFilter("featured")}
            >
              {projectsContent.filterLabels.featured}
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjectsList.map((project) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  whileHover="hover"
                  className="bg-zinc-800/50 rounded-xl overflow-hidden group relative border border-zinc-700/50 hover:border-accentColors-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-accentColors-primary/5"
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Animated glow effect on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-accentColors-primary/30 to-transparent opacity-0 mix-blend-overlay"
                    />
                    
                    {/* Hover overlay removed as requested */}
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                          className="text-xs text-white px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full border border-accentColors-primary/20 shadow-sm shadow-accentColors-primary/5"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
