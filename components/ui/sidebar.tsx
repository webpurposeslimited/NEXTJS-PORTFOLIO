"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHome,
  IconBriefcase,
  IconUser,
  IconMessage,
  IconStar,
  IconMenu2,
  IconX
} from "@tabler/icons-react";
import { navItems as navigationItems, socialLinks, websiteInfo } from "@/data";

type NavItemWithIcon = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type SocialLinkWithIcon = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

// Map string icon names from data file to actual icon components
const getIconComponent = (iconName: string, size = 20) => {
  switch (iconName) {
    case 'IconHome': return <IconHome size={size} />;
    case 'IconBriefcase': return <IconBriefcase size={size} />;
    case 'IconUser': return <IconUser size={size} />;
    case 'IconStar': return <IconStar size={size} />;
    case 'IconMessage': return <IconMessage size={size} />;
    case 'IconBrandGithub': return <IconBrandGithub size={size} />;
    case 'IconBrandLinkedin': return <IconBrandLinkedin size={size} />;
    case 'IconBrandTwitter': return <IconBrandTwitter size={size} />;
    default: return null;
  }
};

// Convert data file nav items to include actual icon components
const navItems: NavItemWithIcon[] = navigationItems.map(item => ({
  name: item.name,
  href: item.href,
  icon: getIconComponent(item.icon)
}));

// Convert data file social links to include actual icon components
const socialLinksWithIcons: SocialLinkWithIcon[] = socialLinks.map(link => ({
  name: link.name,
  href: link.url, // url from data file is mapped to href for component use
  icon: getIconComponent(link.icon)
}));

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <motion.button
        className="fixed top-6 right-6 z-50 bg-zinc-800/80 backdrop-blur-sm p-2 rounded-full lg:hidden border border-zinc-700/50 shadow-lg shadow-black/20"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 20, 20, 0.8)' }}
        whileTap={{ scale: 0.95 }}
        animate={{ backgroundColor: isOpen ? 'rgba(0, 216, 255, 0.2)' : 'rgba(39, 39, 42, 0.8)' }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn("text-white", isOpen ? "text-accentColors-primary" : "text-zinc-300")}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </motion.div>
      </motion.button>

      {/* Background design element */}
      <div className="fixed left-0 top-0 h-screen w-20 hidden lg:block overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-12 w-24 h-24 rounded-full bg-accentColors-primary/20 filter blur-[32px] opacity-40"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-12 w-24 h-24 rounded-full bg-accentColors-secondary/20 filter blur-[32px] opacity-40"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex fixed h-screen w-20 bg-zinc-900/80 backdrop-blur-sm border-r border-zinc-800/50 flex-col justify-between items-center py-8 shadow-xl shadow-black/20 z-30">
        <motion.div 
          className="flex flex-col items-center space-y-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#home">
            <motion.div 
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-accentColors-primary/50 shadow-lg shadow-accentColors-primary/20 relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-accentColors-primary/0 to-accentColors-highlight/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <Image 
                src={websiteInfo.profileImage || "/anna.jpg"}
                alt={`${websiteInfo.author} Profile`}
                fill
                sizes="48px"
                className="object-cover"
              />
            </motion.div>
          </Link>
        </motion.div>

        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item, index) => (
            <div key={item.name} className="mb-4">
              <Link
                href={item.href}
                className="group block relative p-2 rounded-xl hover:bg-zinc-800/80 hover:shadow-lg hover:shadow-accentColors-primary/5 transition-all duration-300"
                aria-label={item.name}
              >
                <span className="text-zinc-400 group-hover:text-accentColors-primary transition-colors duration-300 block">
                  {item.icon}
                </span>
                <div 
                  className="pointer-events-none absolute left-14 bg-zinc-800/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-md border border-accentColors-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap shadow-lg shadow-black/20 z-50"
                >
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </nav>

        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {socialLinksWithIcons.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accentColors-primary transition-colors duration-300 relative group"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10">{item.icon}</span>
              <motion.span 
                className="absolute inset-0 bg-accentColors-primary/10 rounded-full -z-10 opacity-0 group-hover:opacity-100" 
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-72 bg-zinc-900/90 backdrop-blur-md border-l border-zinc-800/70 z-40 lg:hidden flex flex-col justify-between p-6 shadow-xl shadow-black/20"
            >
              {/* Background design elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <motion.div
                  className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-accentColors-primary/10 filter blur-[50px] opacity-30"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 -right-20 w-40 h-40 rounded-full bg-accentColors-secondary/10 filter blur-[60px] opacity-20"
                  animate={{
                    y: [0, 30, 0],
                    x: [0, -10, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              
              <div>
                <motion.div 
                  className="flex flex-col items-center justify-between mb-8"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-accentColors-primary/50 shadow-lg shadow-accentColors-primary/20 relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-accentColors-primary/0 to-accentColors-highlight/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <Image 
                      src={websiteInfo.profileImage}
                      alt={`${websiteInfo.author} Profile`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </motion.div>
                  <h2 className="mt-4 text-xl text-white font-semibold text-center">{websiteInfo.author}</h2>
                  <p className="text-zinc-400 text-sm text-center">{websiteInfo.jobTitle}</p>
                </motion.div>

                <nav className="flex flex-col gap-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 3), duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-800/70 hover:shadow-lg hover:shadow-accentColors-primary/5 text-zinc-300 hover:text-accentColors-primary transition-all duration-300 border border-transparent hover:border-zinc-700/50 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.span 
                          className="text-accentColors-primary/70 group-hover:text-accentColors-primary transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <motion.div 
                className="flex items-center justify-center gap-6 pt-6 mt-6 border-t border-zinc-800/50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                {socialLinksWithIcons.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-accentColors-primary transition-colors duration-300 p-2"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.3, type: "spring" }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
