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
    <div className="flex flex-col items-center justify-center h-full text-white text-center px-4 bg-footer-gradient h-screen">
      <h1 className="text-3xl font-bold">{player.fullName}</h1>
      <h2 className="text-xl font-semibold">{player.surName}</h2>
      <p className="mt-4 text-lg">{player.biography}</p>
      <div className="mt-6">
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
