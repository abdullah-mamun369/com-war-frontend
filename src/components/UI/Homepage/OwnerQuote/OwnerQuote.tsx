import Image from "next/image";
import ownerImage from "@/assets/owner-image.png";
import quotationBox from "@/assets/quote-box.png";
import Container from "../../Container/Container";

const OwnerQuote = () => {
  return (
    <div className="hidden lg:block relative h-[250px] bg-owner-gradient mb-20 mt-48">
      <Container className="flex justify-between items-center">
        <Image
          className="absolute z-10 bottom-0"
          src={ownerImage}
          alt="Owner Quote"
          width={300}
          height={250}
        />
      </Container>
      <Container className="flex justify-end items-center h-full">
        <div className="relative">
          <Image
            className="absolute top-0"
            src={quotationBox}
            alt="Owner Quote"
            width={900}
            height={100}
          />

          <h4 className="text-white font-light text-2xl p-10 z-40">
            As the owner of{" "}
            <span className="text-secondary font-medium">Comilla Warriors</span>
            , I believe{" "}
            <span className="text-secondary font-medium">
              One Team One Dream
            </span>{" "}
            <br />
            is our strength—uniting us to conquer every challenge on the field!
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default OwnerQuote;
