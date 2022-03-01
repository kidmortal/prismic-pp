import { SearchFrame } from "@amopromo/searchframe";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import styles from "./index.module.scss";

const MainBannerFrame = ({ slice }: MainBannerFrameSlice) => (
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
            alt={slice.primary.headerImage.url}
            src={"https://www.passagenspromo.com.br/assets/img/pp-logo.svg"}
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
      <div className={styles.searchframeWrapper}>
        <div
          style={{
            top: slice.primary.frameTop ? slice.primary.frameTop : "-6.5rem",
          }}
          className={styles.searchframe}
        >
          <SearchFrame
            frameTitles={{
              passagem: slice.primary.passagemTitle,
              elquarto: slice.primary.elquartoTitle,
              seguro: slice.primary.seguroTitle,
            }}
            size="WIDE"
            elquartoSearchUrl=""
            passagemSearchUrl=""
            segurosSearchUrl=""
            defaultSearch={slice.primary.defaultSearch || "PASSAGEM"}
          />
        </div>
      </div>
    </div>
  </div>
);

export default MainBannerFrame;
