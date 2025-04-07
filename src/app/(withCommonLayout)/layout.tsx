import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { AppProvider } from "@/context";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <AppProvider>{children}</AppProvider>
      <Footer />
    </>
  );
};

export default CommonLayout;
