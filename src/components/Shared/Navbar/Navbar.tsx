"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import navLogo from "@/assets/nav-logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Container from "@/components/UI/Container/Container";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className="w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-[70px] md:h-[105px] border-b-[1px] border-[#828282]/50 bg-[#010E33] backdrop-blur-lg transition-shadow duration-300 ease-in-out"
      style={{
        boxShadow: scrolling ? "0 4px 10px rgba(0, 0, 0, 0.4)" : "none",
      }}
    >
      <Container>
        <div className="flex justify-between items-center w-full">
          <div
            className={`flex items-center justify-between py-3 md:py-5 md:block `}
          >
            {/* LOGO */}
            <Link href="/">
              <Image
                src={navLogo}
                width={100}
                height={100}
                alt="logo"
                className="cursor-pointer md:w-[100px] md:h-auto w-[50px] h-auto mr-4 md:mr-0"
              />
            </Link>
          </div>
          <div className="hidden md:flex">
            {/* NAVIGATION LINKS */}
            <div className={`flex-1 justify-self-center md:block}`}>
              <div className="h-auto flex items-center gap-8">
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
                    onClick={() => setNavbar(!navbar)}
                    className="text-sm text-white hover:text-secondary transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* SOCIAL ICONS */}
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
          {/* //========================================== */}
          <div className="relative md:hidden">
            <button
              onClick={() => setNavbar(!navbar)}
              className="p-2 text-white focus:outline-none"
            >
              <RiMenu3Fill size={28} />
            </button>
            <div
              className={`fixed top-0 right-0 h-full w-64 bg-primary shadow-lg transform transition-transform duration-500 ease-in-out z-50
                        ${navbar ? "translate-x-0" : "translate-x-full"}`}
            >
              <button
                onClick={() => setNavbar(false)}
                className="absolute top-4 right-4 text-white text-lg"
              >
                <IoClose size={28} className="text-white" />
              </button>
              <div className="h-full flex items-center justify-center flex-col gap-5">
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
                    onClick={() => setNavbar(false)}
                    className="pb-6 text-sm text-white hover:text-secondary transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
