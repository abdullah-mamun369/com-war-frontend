"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import slider1 from "@/assets/CW-website-banner-1.png";
import slider2 from "@/assets/CW-website-banner-2.png";
import slider3 from "@/assets/CW-website-banner-3.png";
import slider4 from "@/assets/CW-website-banner-4.png";
import Button from "../Button/Button";
import Container from "../Container/Container";

const images = [slider1, slider2, slider3, slider4];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Text Section */}
      <Container>
        <div className="absolute  top-1/3 z-10 text-white">
          <div>
            <h1 className="text-[64px] font-bold leading-tight drop-shadow-lg">
              One Team <br /> One Dream
            </h1>
            <p className="text-[20px] font-normal mt-4 drop-shadow-lg">
              Join, where passion meets performance. <br />A team built for
              victory, unity, and excellence.
            </p>
          </div>
          <div className="mt-6">
            {" "}
            {/* You can add margin-top for spacing */}
            <Button variant="outlined" color="secondary">
              JOIN THE TEAM
            </Button>
          </div>
        </div>
      </Container>

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
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
