"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerContent, socialLinks, websiteInfo } from "@/data";
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandTwitter,
  IconChevronRight
} from "@tabler/icons-react";

// Map string icon names to actual icon components
const getIconComponent = (iconName: string, size = 20) => {
  switch (iconName) {
    case 'IconBrandGithub': return <IconBrandGithub size={size} />;
    case 'IconBrandLinkedin': return <IconBrandLinkedin size={size} />;
    case 'IconBrandTwitter': return <IconBrandTwitter size={size} />;
    default: return null;
  }
};

export function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800/50 mt-20">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-4 relative inline-block">
              {footerContent.aboutColumn.title}
              <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-accentColors-primary to-transparent"></span>
            </h3>
            <p className="text-zinc-400 mb-6">
              {footerContent.aboutColumn.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-accentColors-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {getIconComponent(link.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-4 relative inline-block">
              {footerContent.quickLinks.title}
              <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-accentColors-primary to-transparent"></span>
            </h3>
            <ul>
              {footerContent.quickLinks.links.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link 
                    href={link.href}
                    className="text-zinc-400 hover:text-accentColors-primary transition-colors duration-200 flex items-center"
                  >
                    <IconChevronRight size={16} className="mr-1.5 text-accentColors-primary/70" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-4 relative inline-block">
              {footerContent.servicesColumn.title}
              <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-accentColors-highlight to-transparent"></span>
            </h3>
            <ul>
              {footerContent.servicesColumn.services.map((service, index) => (
                <li key={index} className="mb-2 text-zinc-400 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accentColors-highlight/70 mr-2"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom footer with legal links and copyright */}
      <div className="border-t border-zinc-800/50 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-400 text-sm mb-4 md:mb-0">
            {footerContent.copyright}
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {footerContent.legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-zinc-500 hover:text-accentColors-primary text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
