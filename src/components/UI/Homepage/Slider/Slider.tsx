"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import slider1 from "@/assets/CW-website-banner-1.webp";
import slider2 from "@/assets/CW-website-banner-2.webp";
import slider3 from "@/assets/CW-website-banner-3.webp";
import slider4 from "@/assets/CW-website-banner-4.webp";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import Link from "next/link";
import LoadingDesign from "../../LoadingDesign/LoadingDesign";

const images = [slider1, slider2, slider3, slider4];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadedCount === images.length) {
      setLoading(false);
    }
  }, [loadedCount]);

  return (
    <div className="relative w-full h-full md:h-screen overflow-hidden mt-14 md:mt-0">
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
          <LoadingDesign />
        </div>
      )}

      {/* Text Section */}
      {!loading && (
        <Container>
          <div className="absolute top-7 md:top-1/3 z-10 text-white px-7 md:px-4">
            <div>
              <h1 className="text-[24px] md:text-[64px] font-bold leading-tight drop-shadow-lg">
                <span className="text-secondary">One Team</span> <br /> One
                Dream
              </h1>
              <p className="text-sm md:text-lg font-light mt-2 md:mt-4 drop-shadow-lg">
                Join <span className="text-secondary">Comilla Warriors</span>,
                where passion meets performance.{" "}
                <br className="hidden md:block" />
                <span className="hidden md:block">
                  A team built for victory, unity, and excellence.
                </span>
              </p>
            </div>
            <Link href="/contact">
              <Button
                variant="outlined"
                color="secondary"
                className="mt-3 md:mt-6"
              >
                JOIN THE TEAM
              </Button>
            </Link>
          </div>
        </Container>
      )}

      {/* Image Slider */}
      <div
        className={`flex w-full h-full transition-transform duration-700 ease-in-out ${
          loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={img}
              alt={`Slide ${i + 1}`}
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
              onLoadingComplete={() => setLoadedCount((prev) => prev + 1)}
              priority={i === 0} // preload the first image
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
