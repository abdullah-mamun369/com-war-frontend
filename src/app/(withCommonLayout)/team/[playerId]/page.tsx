import UpComingPage from "@/components/UI/UpComingPage/UpComingPage";
import React from "react";

type IndividualPlayerPageProps = {
  params: {
    playerId: string;
  };
};

const IndividualPlayerPage = ({ params }: IndividualPlayerPageProps) => {
  return (
    <div>
      <UpComingPage title={`${params.playerId} number player's`} />
    </div>
  );
};

export default IndividualPlayerPage;
