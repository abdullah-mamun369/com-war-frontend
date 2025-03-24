import React from "react";
import Container from "../../Container/Container";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import Image from "next/image";
import aisInsurance from "@/assets/Ais-insurance 1.png";
import aisPhotography from "@/assets/Artboard 1 copy@4x 1.png";
import arvy from "@/assets/arvy 1.png";
import aum from "@/assets/AUM-colored 1.png";
import bkConsult from "@/assets/bk-consultacy 1.png";
import educare from "@/assets/educare 1.png";
import parking from "@/assets/parking-control 1.png";
import tahmina from "@/assets/Tahmina 1.png";

const TeamPartners = () => {
  return (
    <Container className="mt-10 lg:mt-32">
      <Heading
        title="TEAM PARTNERS"
        subtitle="Meet our partners who are supporting us for 2025 season."
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 mt-6 md:mt-6">
        <div className="relative border-gray-300 mr-4">
          <div className="border-t-2 border-b-2 border-gray-300 mr-5">
            <div>
              <h3 className="text-primary text-2xl font-semibold text-center mt-5">
                PRINCIPAL PARTNERS
              </h3>

              <div className="flex justify-center items-center gap-4 md:gap-8 mt-4 md:mt-8 mb-10">
                <Image
                  src={aisInsurance}
                  width={200}
                  height={100}
                  alt="sponsorLogo"
                  className=""
                />
                <Image
                  src={aum}
                  width={200}
                  height={100}
                  alt="sponsorLogo"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[20px] right-0 h-[calc(100%-40px)] w-[2px] bg-[#E5E5E5]"></div>
        </div>
        <div className="border-gray-300 ">
          <div className="border-t-2 border-b-2 border-gray-300 mr-5">
            <div>
              <h3 className="text-primary text-2xl font-semibold text-center mt-5">
                PRINCIPAL PARTNERS
              </h3>

              <div className="flex justify-center items-center gap-4 md:gap-8 mt-4 md:mt-8 mb-10">
                <Image
                  src={aisPhotography}
                  width={200}
                  height={100}
                  alt="sponsorLogo"
                  className=""
                />
                <Image
                  src={tahmina}
                  width={280}
                  height={100}
                  alt="sponsorLogo"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative border-gray-300 mr-4">
          <div className=" border-b-2 border-gray-300 mr-5">
            <div>
              <h3 className="text-primary text-2xl font-semibold text-center mt-5">
                PRINCIPAL PARTNERS
              </h3>

              <div className="flex justify-center items-center gap-4 md:gap-8 mt-4 md:mt-8 mb-10">
                <Image
                  src={parking}
                  width={200}
                  height={100}
                  alt="sponsorLogo"
                  className=""
                />
                <Image
                  src={bkConsult}
                  width={100}
                  height={100}
                  alt="sponsorLogo"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[20px] right-0 h-[calc(100%-40px)] w-[2px] bg-[#E5E5E5]"></div>
        </div>
        <div className="border-gray-300 ">
          <div className="border-b-2 border-gray-300 mr-5">
            <div>
              <h3 className="text-primary text-2xl font-semibold text-center mt-5">
                PRINCIPAL PARTNERS
              </h3>

              <div className="flex justify-center items-center gap-4 md:gap-8 mt-4 md:mt-8 mb-10">
                <Image
                  src={educare}
                  width={150}
                  height={100}
                  alt="sponsorLogo"
                  className=""
                />
                <Image
                  src={arvy}
                  width={200}
                  height={100}
                  alt="sponsorLogo"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 md:mt-6 text-center">
        <Button variant="contained" color="primary">
          VIEW ALL PARTNERS
        </Button>
      </div>
    </Container>
  );
};

export default TeamPartners;
