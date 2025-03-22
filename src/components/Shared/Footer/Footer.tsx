import Image from "next/image";
import footerBg from "@/assets/footer-bg.png";
import navImage from "@/assets/nav-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full">
      <div className="absolute -z-10 w-full">
        <Image
          src={footerBg}
          alt="footer-bg"
          layout="responsive"
          width={1200}
          height={675}
        />
      </div>
      <div className="container mx-auto flex justify-between items-start px-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">About</h2>
          <p className="text-sm mb-4">
            The Comilla Warriors is a dynamic cricket club based in London,
            established 7 years ago in 2018.
          </p>
          <Link href="/">
            <Image
              src={navImage}
              width={100}
              height={100}
              alt="logo"
              className="cursor-pointer md:w-[100px] md:h-auto w-[50px] h-auto mr-4 md:mr-0"
            />
          </Link>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <p className="text-sm flex items-center gap-2 mb-1">
            info.comillawarriors@gmail.com
          </p>
          <p className="text-sm flex items-center gap-2 mb-1">+145 698 287</p>
          <p className="text-sm flex items-center gap-2 mb-4">+348 927 361</p>

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
        <div className="h-auto items-center justify-center flex  flex-col gap-5 md:gap-10">
          {["ABOUT US", "TEAM", "EVENTS", "GALLERY", "NEWS", "CONTACT"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="pb-6 text-sm text-white hover:text-[#62D4F9] transition duration-300 ease-in-out"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="text-center text-xs mt-6 border-t border-gray-600 pt-4">
        © 2025 Comilla Warriors. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
