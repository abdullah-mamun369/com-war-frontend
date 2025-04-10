import Image from "next/image";
import contactBg from "@/assets/contact-bg 1.png";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import InputWithLabel from "../../Form/InputWithLabel";
import TextareaWithLabel from "../../Form/TextareaWithLabel";

const ContactUs = () => {
  return (
    <section className="relative w-full h-[550px]">
      <Image
        src={contactBg}
        alt="C.W. Trophy"
        width={850}
        height={400}
        className="absolute left-0 bottom-0 -z-10 w-64 lg:w-[850px]"
      />
      <Container className="flex justify-center items-center h-full flex-col text-white z-20 mx-4">
        <Heading
          title="CONTACT US"
          subtitle="We’re here to help—get in touch."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 md:mt-8 w-full max-w-xs md:max-w-2xl">
          <InputWithLabel
            id="name"
            label="Name"
            type="text"
            placeholder="Enter your name"
            className="col-span-1"
          />
          <InputWithLabel
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            className="col-span-1"
          />

          <TextareaWithLabel
            id="message"
            label="Message"
            placeholder="Write your message here..."
            rows={4}
            className="col-span-1 md:col-span-2 max-w-full mt-2"
          />
        </div>
        <div className="mt-3 md:mt-10 text-center">
          <Button variant="contained" color="primary">
            SEND MESSAGE
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
