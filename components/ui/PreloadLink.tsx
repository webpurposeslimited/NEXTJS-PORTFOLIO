"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface PreloadLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
  scroll?: boolean;
  onClick?: () => void;
}

export function PreloadLink({ 
  href, 
  children, 
  className = '', 
  prefetch = true,
  scroll = true,
  onClick,
  ...props 
}: PreloadLinkProps) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    // Prefetch the page when hovering
    if (prefetch) {
      router.prefetch(href);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Link 
      href={href}
      className={`transition-opacity duration-300 ${isHovering ? 'opacity-80' : 'opacity-100'} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      prefetch={prefetch}
      scroll={scroll}
      {...props}
    >
      {children}
    </Link>
  );
}
