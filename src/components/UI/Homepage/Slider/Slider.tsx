"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import slider1 from "@/assets/CW-website-banner-1.png";
import slider2 from "@/assets/CW-website-banner-2.png";
import slider3 from "@/assets/CW-website-banner-3.png";
import slider4 from "@/assets/CW-website-banner-4.png";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import styles from "@/Styles/CommonLayout/Homepage/Home.module.css";

const images = [slider1, slider2, slider3, slider4];
const floatingText = "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND";

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {/* Text Section */}
      <Container>
        <div className="absolute top-1/4 md:top-1/3 z-10 text-white px-4">
          <div>
            <h1 className="text-[32px] md:text-[64px] font-bold leading-tight drop-shadow-lg">
              <span className="text-secondary">One Team</span>{" "}
              <br className="hidden md:block" /> One Dream
            </h1>
            <p className="text-[16px] md:text-[20px] font-normal mt-4 drop-shadow-lg">
              Join, where passion meets performance.{" "}
              <br className="hidden md:block" />A team built for victory, unity,
              and excellence.
            </p>
          </div>
          <div className="mt-6">
            <Button variant="outlined" color="secondary">
              JOIN THE TEAM
            </Button>
          </div>
        </div>
      </Container>

      {/* Floating Extra Text Section Slider
 <div className="absolute bottom-0 left-0 w-full z-20 bg-[#0a2742] text-white text-[18px] md:text-[24px] font-semibold py-2 border-t border-white shadow-lg overflow-hidden">
 <div className="animate-continuous-slide whitespace-nowrap">
   {floatingText.repeat(10)}
 </div>
</div> */}

      {/* Floating Extra Text Section Slider */}
      <div className={`${styles.floatingTextContainer}`}>
        <div className={`${styles.floatingText}`}>{floatingText.repeat(2)}</div>
      </div>

      {/* Image Slider */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
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
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes continuous-slide {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-continuous-slide {
          display: inline-block;
          animation: continuous-slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Slider;
