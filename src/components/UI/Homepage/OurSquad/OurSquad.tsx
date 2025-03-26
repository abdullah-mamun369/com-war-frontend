import Image from "next/image";
import footerBg from "@/assets/squad-bg.png";
import Container from "../../Container/Container";
import Button from "../../Button/Button";
import Heading from "../../Heading/Heading";

const OurSquad = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center">
      <div className="absolute -z-10 w-full">
        <Image
          src={footerBg}
          alt="footer-bg"
          layout="responsive"
          width={1200}
          height={675}
        />
      </div>
      {/* Content on top of the background */}
      <Container className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <Heading title="OUR SQUAD" subtitle="Meet our squad for 2025 season." />
        <div className="mt-3 md:mt-6 text-center">
          <Button variant="contained" color="primary">
            VIEW MORE
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OurSquad;
