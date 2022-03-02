import { SearchFrame as SearchFrameLib } from "@amopromo/searchframe";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const SearchFrame = ({ slice }: SearchFrameSlice) => {
  const [width, setWidth] = useState(1000);
  const breakpoint = 640;
  const smallScreen = width < breakpoint;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div
      style={{
        marginTop: slice.primary.marginTop,
        marginBottom: slice.primary.marginBottom,
      }}
      className={styles.container}
    >
      <SearchFrameLib
        frameTitles={{
          passagem: slice.primary.passagemTitle,
          elquarto: slice.primary.elquartoTitle,
          seguro: slice.primary.seguroTitle,
        }}
        size={smallScreen ? "THIN" : "WIDE"}
        elquartoSearchUrl=""
        passagemSearchUrl=""
        segurosSearchUrl=""
        defaultSearch={slice.primary.defaultSearch || "PASSAGEM"}
      />
    </div>
  );
};

export default SearchFrame;
