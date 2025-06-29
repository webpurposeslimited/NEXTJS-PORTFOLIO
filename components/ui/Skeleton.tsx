"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className, width = "100%", height = "100%" }: SkeletonProps) {
  return (
    <div 
      className={cn(
        "animate-pulse rounded-md bg-zinc-700/50", 
        className
      )}
      style={{ width, height }}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-zinc-800/30 rounded-lg overflow-hidden border border-zinc-700/50">
      <Skeleton className="h-44 w-full" />
      <div className="p-4 sm:p-5 md:p-6">
        <Skeleton className="h-6 w-2/3 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <div className="flex flex-wrap gap-2 mb-3">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-12 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <div className="bg-zinc-800/30 rounded-lg overflow-hidden border border-zinc-700/50 p-6">
      <div className="flex items-center mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="ml-3">
          <Skeleton className="h-5 w-32 mb-1" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}
