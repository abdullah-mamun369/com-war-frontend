import Button from "../../Button/Button";
import Container from "../../Container/Container";
import Heading from "../../Heading/Heading";

const Gallery = () => {
  return (
    <section className="mb-20">
      <Container className=" flex flex-col items-center justify-center h-full text-white text-center px-4">
        <Heading
          title="GALLERY"
          subtitle="Explore all the unforgettable moments with Comilla Warriors."
        />

        <div className="mt-3 md:mt-6 text-center">
          <Button variant="contained" color="primary">
            VIEW FULL GALLERY
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
