import NewsTicker from "@/components/UI/Homepage/NewsTicker/NewsTicker";
import Slider from "@/components/UI/Homepage/Slider/Slider";
import TeamPartners from "@/components/UI/Homepage/TeamPartners/TeamPartners";

export default function Home() {
  return (
    <>
      <Slider />
      <NewsTicker />
      <TeamPartners />
    </>
  );
}
