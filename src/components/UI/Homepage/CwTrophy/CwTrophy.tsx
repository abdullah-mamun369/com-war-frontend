"use client";

import Image from "next/image";
import React from "react";
import cwTrophyBg from "@/assets/cw-trophy-bg.png";
import Container from "../../Container/Container";
import trophy2 from "@/assets/t1.png";
import trophy1 from "@/assets/t2.png";
import trophy3 from "@/assets/t6.png";
import trophy4 from "@/assets/t7.png";
import trophy5 from "@/assets/t5.png";

const trophies = [
  { src: trophy1, label: "LPL Trophy" },
  { src: trophy2, label: "NAS Trophy" },
  { src: trophy3, label: "London Champion Trophy" },
  { src: trophy4, label: "AIS Trophy" },
  { src: trophy5, label: "Tri-Nation Trophy" },
];

const CwTrophy = () => {
  return (
    <section className="relative w-full">
      <Image
        src={cwTrophyBg}
        alt="C.W. Trophy"
        width={1920}
        height={100}
        className="w-full"
      />
      <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-center px-5 lg:px-0">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            <span className="text-secondary">C.W.</span> SHOP
          </h1>
          <p className="text-base text-white">
            Get your hands on exclusive Comilla Warriors gear and merchandise.
          </p>
        </div>
        <div className="flex  justify-between items-end p-4">
          {trophies.map((trophy, index) => (
            <div key={index} className="relative group">
              <div className="peer flex flex-col items-center transition-transform duration-500 ease-in-out hover:scale-110">
                <Image
                  src={trophy.src}
                  alt={trophy.label}
                  width={170}
                  height={200}
                  className="object-contain"
                />
                <span className="mt-2 text-white text-sm text-center">
                  {trophy.label}
                </span>
              </div>

              {/* All siblings react to the hover state of a peer */}
              <style jsx>{`
                .group:hover .peer:not(:hover) {
                  transform: scale(0.75);
                  transition: transform 0.5s ease-in-out;
                }
              `}</style>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CwTrophy;
