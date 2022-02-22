import Image from "next/image";
import { TextBannersSlice } from "../types";
import styles from "./index.module.scss";

const TextBanners = ({ slice }: TextBannersSlice) => {
  console.log(slice);
  return (
    <div className={styles.container}>
      {slice.items.map((banner, idx) => (
        <a
          href={banner.link.url || ""}
          target="_blank"
          rel="noreferrer"
          key={idx}
        >
          <div className={styles.banner}>
            <Image
              className={styles.image}
              width={338}
              height={220}
              alt={banner.image.alt}
              src={banner.image.url}
            />
            <span className={styles.title}>{banner.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TextBanners;
