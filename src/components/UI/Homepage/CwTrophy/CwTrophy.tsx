import Image from "next/image";
import React from "react";
import cwTrophyBg from "@/assets/cw-trophy-bg.png";
import Container from "../../Container/Container";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";

const CwTrophy = () => {
  return (
    <section>
      <Image
        src={cwTrophyBg}
        alt="C.W. Trophy"
        width={1920}
        height={100}
        className="w-full relative"
      />
      <Container className="absolute flex justify-center items-center z-50">
        <Heading
          title="C.W. SHOP"
          subtitle="Get your hands on exclusive Comilla Warriors gear and merchandise."
        />
        <div className="mt-3 md:mt-10 text-center">
          <Button variant="contained" color="primary">
            VIEW SHOP
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CwTrophy;
