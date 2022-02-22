import { RichText } from "prismic-reactjs";
import Image from "next/image";
import styles from "./index.module.scss";

const ImageTextBox = ({ slice }: ImageTextBoxSlice) => {
  return (
    <div className={styles.container}>
      {slice.items.map((box, idx) => (
        <div className={styles.boxContainer} key={idx}>
          <div className={styles.contentContainer}>
            <span className={styles.title}>{box.title}</span>
            <div className={styles.content}>
              <RichText render={box.content} />
            </div>
          </div>
          {box.image.url && (
            <div
              style={{ position: "relative", height: "100%", width: "60rem" }}
            >
              <Image layout="fill" alt={box.image.url} src={box.image.url} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageTextBox;
