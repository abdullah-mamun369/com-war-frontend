"use client";

import { useAppContext } from "@/context";
import playersApi from "@/Api/players.json";
import Image from "next/image";
import { useEffect } from "react";
import { Player } from "@/types";
import Link from "next/link";
import CustonCarosel from "../../CustomCarosel/CustomCarosel";

const Players = () => {
  const { player, setPlayer, players, setPlayers } = useAppContext();

  console.log("Player:", player);

  useEffect(() => {
    console.log("Imported players:", playersApi);
    setPlayers(playersApi as Player[]);
  }, [setPlayers]);

  return (
    <CustonCarosel className="pl-0 lg:pl-20">
      {players.map((player: Player, index: number) => (
        <div
          key={index}
          className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 snap-start shrink-0"
        >
          <div className="flex">
            <Link
              href={`/team/${player.id}`}
              onClick={() => setPlayer(player)}
              className="hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Image
                src={player.squadImage}
                alt={player.fullName}
                width={150}
                height={150}
                className=""
              />
              <div className="p-2">
                <h3 className="text-base font-bold text-primary">
                  {player.fullName}
                </h3>
                <p className="text-sm font-medium text-text">
                  {player.surName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </CustonCarosel>
  );
};

export default Players;
