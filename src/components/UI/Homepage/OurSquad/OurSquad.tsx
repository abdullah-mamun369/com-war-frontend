"use client";

import Image from "next/image";
import footerBg from "@/assets/squad-bg.png";
import Container from "../../Container/Container";
import Button from "../../Button/Button";
import Heading from "../../Heading/Heading";
import Players from "./Players";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingDesign from "../../LoadingDesign/LoadingDesign";

const OurSquad = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative hidden md:flex justify-center items-center w-full h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center mb-20">
      <div className="absolute -z-10 w-full">
        <Image
          src={footerBg}
          alt="footer-bg"
          layout="responsive"
          width={1200}
          height={675}
        />
      </div>

      <Container className="flex flex-col items-center justify-center h-full text-white text-center px-4">
        <Heading title="OUR SQUAD" subtitle="Meet our squad for 2025 season." />
        <div className="my-6 md:my-8">
          {loading ? <LoadingDesign /> : <Players />}
        </div>
        {!loading && (
          <div className="mt-3 md:mt-6 text-center">
            <Link href={"/team"}>
              <Button variant="contained" color="primary">
                VIEW FULL SQUAD
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default OurSquad;
