import Button from "../../Button/Button";
import Container from "../../Container/Container";
import Heading from "../../Heading/Heading";
import ImageContainer from "./ImageContainer";

const Gallery = () => {
  return (
    <section className="mb-20">
      <Container className=" flex flex-col items-center justify-center h-full  px-4">
        <Heading
          title="GALLERY"
          subtitle="Explore all the unforgettable moments with Comilla Warriors."
        />
        <div>
          <ImageContainer />
        </div>

        <div className="mt-3 md:mt-10 text-center">
          <Button variant="contained" color="primary">
            VIEW FULL GALLERY
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
