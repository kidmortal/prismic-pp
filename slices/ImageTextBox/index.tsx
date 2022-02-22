import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { ImageTextBoxSlice } from "../types";
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
            <Image
              width={box.image.dimensions.width}
              height={box.image.dimensions.height}
              alt={box.image.url}
              src={box.image.url}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageTextBox;
