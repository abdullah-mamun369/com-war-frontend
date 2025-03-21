import Button from "@/components/UI/Button/Button";

const Footer = () => {
  return (
    <div className="h-screen w-screen bg-white">
      This is footer
      <button className="bg-primary text-white px-10 py-5">Click me</button>
      <Button variant="outlined" color="secondary">
        Join now
      </Button>
    </div>
  );
};

export default Footer;
