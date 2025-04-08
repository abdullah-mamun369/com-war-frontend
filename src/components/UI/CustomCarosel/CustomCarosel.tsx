"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/Styles/CommonLayout/Homepage/Home.module.css";

interface FlexibleCarouselProps {
  children: React.ReactNode;
  className?: string;
}

const CustonCarosel: React.FC<FlexibleCarouselProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    containerRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`w-full max-w-full relative ${className}`}>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className={`flex scroll-smooth overflow-x-auto snap-x snap-mandatory ${styles.noScrollbar}`}
        >
          {children}
        </div>
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2  shadow-md hover:shadow-lg hover:scale-125 bg-gradient-to-tl from-primary to-secondary rounded-full transition-all duration-300 ease-in-out"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 shadow-md hover:shadow-lg hover:scale-125 bg-gradient-to-tl from-primary to-secondary rounded-full transition-all duration-300 ease-in-out"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CustonCarosel;
