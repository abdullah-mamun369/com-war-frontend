import Button from "../../Button/Button";
import Container from "../../Container/Container";
import Heading from "../../Heading/Heading";
import product1 from "@/assets/1.jpg";
import product2 from "@/assets/2.jpg";
import product3 from "@/assets/3.jpg";
import product4 from "@/assets/4.jpg";
import Image from "next/image";

const CwShop = () => {
  const products = [product1, product2, product3, product4];

  return (
    <section className="bg-[#EFEFEF] py-5 lg:py-16">
      <Container className="px-4">
        <Heading
          title="C.W. SHOP"
          subtitle="Get your hands on exclusive Comilla Warriors gear and merchandise."
        />
        <div className="flex justify-center items-center gap-2 lg:gap-5 mt-3 md:mt-8 roun">
          {products.map((product, index) => (
            <div key={index}>
              <a
                href="https://www.gray-nicolls.co.uk/collections/comilla-warriors-cc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={product}
                  alt={index.toString()}
                  width={300}
                  height={100}
                  className="rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-3 md:mt-10 text-center">
          <a
            href="https://www.gray-nicolls.co.uk/collections/comilla-warriors-cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              VIEW SHOP
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CwShop;
