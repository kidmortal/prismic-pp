import Image from "next/image";
import styles from "./index.module.scss";

const Header = ({ slice }: HeaderSlice) => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          width={slice.primary.logo.dimensions.width}
          height={slice.primary.logo.dimensions.height}
          alt={slice.primary.logo.url}
          src={slice.primary.logo.url}
        />
      </div>
      <div className={styles.links}>
        {slice.items.map((link, idx) => (
          <a href={link.link.url} target="_blank" key={idx} rel="noreferrer">
            <span className={styles.link}>{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
