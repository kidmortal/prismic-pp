import Image from "next/image";
import styles from "./index.module.scss";

const Banners = ({ slice }: BannersSlice) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{slice.primary.title}</span>
      <div className={styles.bannerContainer}>
        {slice.items.map((banner, idx) => (
          <a
            href={banner.bannerLink.url}
            target="_blank"
            key={idx}
            rel="noreferrer"
          >
            <Image
              width={345}
              height={115}
              className={styles.banner}
              alt={banner.bannerImage.alt}
              src={banner.bannerImage.url}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banners;
