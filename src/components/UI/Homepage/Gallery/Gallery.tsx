"use client";

import Link from "next/link";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import Heading from "../../Heading/Heading";
import ImageContainer from "./ImageContainer";
import { useEffect, useState } from "react";
import LoadingDesign from "../../LoadingDesign/LoadingDesign";

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mb-20">
      <Container className=" flex flex-col items-center justify-center h-full px-4">
        <Heading
          title="GALLERY"
          subtitle="Explore all the unforgettable moments with Comilla Warriors."
        />
        <div>
          {loading ? (
            <div className="lg:h-96 lg:w-96 flex justify-center items-center">
              <LoadingDesign />
            </div>
          ) : (
            <ImageContainer />
          )}
        </div>

        <div className="mt-3 md:mt-10 text-center">
          <Link href={"/gallery"}>
            <Button variant="contained" color="primary">
              VIEW FULL GALLERY
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
