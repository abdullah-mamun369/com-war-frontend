import Image from "next/image";
import contactBg from "@/assets/contact-bg 1.png";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";

const ContactUs = () => {
  return (
    <section className="relative w-full h-[550px]">
      <Image
        src={contactBg}
        alt="C.W. Trophy"
        width={850}
        height={400}
        className="absolute left-0 bottom-0"
      />
      <div>
        <Heading
          title="CONTACT US"
          subtitle="We’re here to help—get in touch."
        />
        <div className="mt-3 md:mt-10 text-center">
          <Button variant="contained" color="primary">
            SEND MESSAGE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
