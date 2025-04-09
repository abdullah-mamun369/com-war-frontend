import Image from "next/image";
import React from "react";
import cwTrophyBg from "@/assets/cw-trophy-bg.png";
import Container from "../../Container/Container";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";

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
      <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="text-center px-5 lg:px-0">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            <span className="text-accent">C.W.</span> SHOP
          </h1>
          <p className="text-base text-white">
            Get your hands on exclusive Comilla Warriors gear and merchandise.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CwTrophy;
