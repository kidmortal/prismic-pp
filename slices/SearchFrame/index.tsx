import { SearchFrame as SearchFrameLib } from "@amopromo/searchframe";

const SearchFrame = ({ slice }: SearchFrameSlice) => {
  return (
    <div>
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
        defaultSearch={slice.primary.defaultSearch}
      />
    </div>
  );
};

export default SearchFrame;
