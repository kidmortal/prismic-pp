import { SearchFrame as SearchFrameLib } from "@amopromo/searchframe";
import styles from "./index.module.scss";

const SearchFrame = ({ slice }: SearchFrameSlice) => {
  console.log(slice);
  return (
    <div className={styles.container}>
      <SearchFrameLib
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
  );
};

export default SearchFrame;
