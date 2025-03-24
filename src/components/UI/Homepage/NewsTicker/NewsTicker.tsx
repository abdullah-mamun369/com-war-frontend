import styles from "@/Styles/CommonLayout/Homepage/Home.module.css";

const NewsTicker = () => {
  const floatingText = "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND";

  return (
    <div className="absolute hidden md:block bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 bg-primary text-white text-2xl font-semibold p-9 border border-secondary shadow-xl whitespace-nowrap overflow-hidden max-w-7xl">
      <div>
        <div className={`${styles.floatingText}`}>{floatingText.repeat(2)}</div>
      </div>
    </div>
  );
};

export default NewsTicker;
