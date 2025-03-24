interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`text-center px-5 lg:px-0 ${className}`}>
      <h1 className="text-2xl md:text-4xl font-bold text-primary">{title}</h1>
      {subtitle && <p className="text-base text-text">{subtitle}</p>}
    </div>
  );
};

export default Heading;
