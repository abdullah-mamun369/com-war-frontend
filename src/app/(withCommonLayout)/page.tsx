import ContactUs from "@/components/UI/Homepage/ContactUs/ContactUs";
import CwShop from "@/components/UI/Homepage/CwShop/CwShop";
import CwTrophy from "@/components/UI/Homepage/CwTrophy/CwTrophy";
import Gallery from "@/components/UI/Homepage/Gallery/Gallery";
import NewsTicker from "@/components/UI/Homepage/NewsTicker/NewsTicker";
import OurSquad from "@/components/UI/Homepage/OurSquad/OurSquad";
import OwnerQuote from "@/components/UI/Homepage/OwnerQuote/OwnerQuote";
import Slider from "@/components/UI/Homepage/Slider/Slider";
import TeamPartners from "@/components/UI/Homepage/TeamPartners/TeamPartners";
export default function Home() {
  return (
    <>
      <Slider />
      <NewsTicker />
      <TeamPartners />
      <OurSquad />
      <OwnerQuote />
      <Gallery />
      <CwShop />
      <CwTrophy />
      <ContactUs />
    </>
  );
}
