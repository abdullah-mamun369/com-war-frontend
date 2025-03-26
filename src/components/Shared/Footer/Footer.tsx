import Image from "next/image";
import navLogo from "@/assets/nav-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Container from "@/components/UI/Container/Container";

const Footer = () => {
  return (
    <div className="relative h-fit bg-footer-gradient">
      <Container>
        <div className="container flex flex-col md:flex-row justify-between pl-7 py-5 md:py-16 p md:pl-0">
          {/* About Section */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-xl text-white font-semibold mb-5">About</h2>
            <p className="text-base font-light text-white mb-5">
              The Comilla Warriors is a dynamic
              <br /> cricket club based in London, established
              <br /> 7 years ago in 2018.
            </p>
            <Link href="/">
              <Image
                src={navLogo}
                width={100}
                height={100}
                alt="logo"
                className="cursor-pointer md:w-[180px] md:h-auto w-[100px] h-auto mr-4 md:mr-0"
              />
            </Link>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl text-white font-semibold mb-5">Contact</h2>
            <div className="flex items-center gap-3 mb-5">
              <MdEmail className="text-2xl text-white" />
              <p className="text-base font-light text-white">
                info.comillawarriors@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <FaPhone className="text-2xl text-white" />
              <p className="text-base font-light text-white">+145 698 287</p>
            </div>
            <div className="flex items-center gap-3 mb-10">
              <IoLogoWhatsapp className="text-2xl text-white" />
              <p className="text-base font-light text-white">+348 927 361</p>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              {[
                FaFacebookF,
                BiLogoInstagramAlt,
                FaSquareXTwitter,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (
                <Link
                  href="/"
                  key={index}
                  className="flex items-center justify-center w-7 h-7 border border-[#62D4F9] rounded-full text-[#62D4F9] hover:bg-[#62D4F9] hover:text-black transition duration-300 ease-in-out"
                >
                  <Icon className="text-sm" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="h-auto items-center justify-center hidden md:flex flex-col gap-5 md:gap-6">
            {[
              "HOME",
              "ABOUT US",
              "TEAM",
              "EVENTS",
              "GALLERY",
              "NEWS",
              "CONTACT",
            ].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="pb text-sm text-white hover:text-[#62D4F9] transition duration-300 ease-in-out"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="text-center text-xs py-8 border-t border-gray-600 text-white font-extralight">
        © 2025 Comilla Warriors. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
