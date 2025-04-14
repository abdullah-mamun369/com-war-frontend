interface UpcomingPageProps {
  title: string;
}

const UpComingPage: React.FC<UpcomingPageProps> = ({ title }) => {
  return (
    <div className="h-screen w-screen bg-footer-gradient flex justify-center items-center">
      <h1 className="text-white font-medium text-4xl">
        {title} page is under construction
      </h1>
    </div>
  );
};

export default UpComingPage;
