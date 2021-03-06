import Image from "next/image";
import { RichText } from "prismic-reactjs";
import styles from "./index.module.scss";

const MainBannerFrame = ({ slice }: MainBannerFrameSlice) => {
  console.log(slice);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: slice.primary.background,
        marginBottom: "12rem",
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLogo}>
            <Image
              width={200}
              height={64}
              alt="banner-image"
              src={slice.primary.bannerImageUrl.url}
            />
          </div>
          <div className={styles.headerLinksContainer}>
            <span className={styles.headerLink}>Passagens Aereas</span>
            <span className={styles.headerLink}>Seguro viagem</span>
            <span className={styles.headerLink}>Hotel</span>
            <span className={styles.headerLink}>Carros </span>
            <span className={styles.headerLink}>Blog</span>
            <span className={styles.headerLink}>Ajuda</span>
            <span className={styles.headerLink}>Conta</span>
            <div className={styles.menuButton}>
              Menu
              <span className={styles.triangle}></span>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.title}>{slice.primary.bannerTitle}</div>
            <div className={styles.text}>
              <RichText render={slice.primary.bannerText} />
            </div>
          </div>
          <div className={styles.bannerImage}>
            <Image
              width={330}
              height={250}
              alt={slice.primary.bannerImage.alt}
              src={slice.primary.bannerImage.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBannerFrame;
