import { SmallTextboxSlice } from "../types";
import styles from "./index.module.scss";

const SmallTextbox = ({ slice }: SmallTextboxSlice) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: slice.primary.boxColor }}
    >
      <h1 className={styles.title}>{slice.primary.title}</h1>
      <span className={styles.text}>{slice.primary.text}</span>
      <div className={styles.buttonContainer}>
        {slice.items.map((item, idx) => (
          <button
            className={styles.button}
            onClick={() => window.open(item.buttonLink.url, "_blank")}
            key={idx}
            style={{ backgroundColor: item.buttonColor }}
          >
            {item.buttonText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmallTextbox;
