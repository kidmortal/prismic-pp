import Image from "next/image";
import styles from "./index.module.scss";

const MainBanner = ({ slice }: MainBannerSlice) => {
  return (
    <div
      style={{
        backgroundImage: `url(${slice.primary.image.url})`,
        height: slice.primary.image?.dimensions?.height || 280,
      }}
      className={styles.container}
    >
      <span className={styles.title}>{slice.primary.title}</span>
    </div>
  );
};

export default MainBanner;
