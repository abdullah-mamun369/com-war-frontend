"use client";

import { useAppContext } from "@/context";
import galleryImageApi from "@/Api/gallery.json";
import { GalleryImage } from "@/types";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaImage } from "react-icons/fa6";

const ImageContainer = () => {
  const { galleryImages, setGalleryImages } = useAppContext();

  useEffect(() => {
    console.log("Imported images:", galleryImageApi);
    setGalleryImages(galleryImageApi as GalleryImage[]);
  }, [setGalleryImages]);

  const filteredImages = galleryImages.slice(0, 5);

  return (
    <section className="w-full lg:mt-6 mt-3">
      <div className="space-y-4">
        {/* First Row */}
        <div className="grid grid-cols-2 gap-4">
          {filteredImages.slice(0, 2).map((img) => (
            <div
              key={img._id}
              className="relative w-full h-28 lg:h-72 overflow-hidden rounded-lg lg:rounded-2xl shadow group"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={img.url}
                  alt={img.alt}
                  title={img.title}
                  width={700}
                  height={300}
                  className=" object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent px-4 py-3 flex items-end gap-2 rounded-b-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div className="hidden lg:flex items-center justify-center w-6 h-6 bg-accent ">
                  <FaImage className="w-4 h-4 text-white" />
                </div>
                <span className="text-[7px] lg:text-sm font-medium text-white">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.slice(2, 5).map((img) => (
            <div
              key={img._id}
              className="relative w-full h-28 lg:h-64 overflow-hidden rounded-lg lg:rounded-2xl shadow group"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={img.url}
                  alt={img.alt}
                  title={img.title}
                  width={700}
                  height={300}
                  className=" object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent px-4 py-3 flex items-end gap-2 rounded-b-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div className="hidden lg:flex items-center justify-center w-6 h-6  bg-accent ">
                  <FaImage className="w-4 h-4 text-white" />
                </div>
                <span className="text-[7px] lg:text-sm font-medium text-white">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageContainer;
