import LoadingDesign from "@/components/UI/LoadingDesign/LoadingDesign";
import UpComingPage from "@/components/UI/UpComingPage/UpComingPage";
import playersApi from "@/Api/players.json";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

type IndividualPlayerPageProps = {
  params: {
    playerId: string | number;
  };
};

const IndividualPlayerPage = ({ params }: IndividualPlayerPageProps) => {
  const playerId = Number(params.playerId);
  const player = playersApi.find((player) => player.id === playerId);

  console.log("Player form indi:", player);
  console.log("Player ID form indi:", params.playerId);

  if (!player) return notFound();

  return (
    <div className="flex flex-col items-center justify-center text-white text-center px-4 bg-footer-gradient h-screen">
      <h1 className="text-3xl font-bold">{player.fullName}</h1>
      <h2 className="text-xl font-semibold">{player.surName}</h2>
      <p className="mt-4 text-lg">{player.biography}</p>
      <div className="mt-6">
        <svg
          width="321"
          height="671"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M319.79 0L160.48 159.17V159.32V206.76L319.79 47.59V0ZM319.79 129.18L160.48 288.36V244.43L319.79 85.26V129.18ZM320.24 210.61L160.24 370.23V336.34L0.240234 495.96V485.64L160.24 326.03V331.9L320.24 172.29V210.61ZM320.24 292.49L160.24 452.11V424.11L1.30023 582.66L0.240234 583.72V579L159.18 420.45L160.24 419.39V419.38L320.24 259.77V292.49ZM160.24 533.98L320.24 374.37V347.24L160.24 506.86V507.97L0.240234 667.59V670.44L160.24 510.83V533.98ZM0.240234 407.41L160.24 247.79V231.87L0.240234 391.49V407.41ZM160.48 142.07V159.17V159.32L1.17017 318.01V300.76L160.48 142.07Z"
            fill="black"
            opacity="0.1"
          />
        </svg>
        <Image
          src={player.squadImage}
          alt={player.fullName}
          width={150}
          height={150}
          className=""
        />
      </div>
    </div>
  );
};

export default IndividualPlayerPage;
