/// <reference types="react" />
declare type SearchFrameWideProps = {
    defaultSearch: "PASSAGEM" | "SEGURO" | "ELQUARTO";
    passagemSearchUrl: string;
    segurosSearchUrl: string;
    elquartoSearchUrl: string;
    hideProducts?: boolean;
    multipleCalendars?: boolean;
    mobile?: boolean;
};
export declare function SearchFrameWide({ hideProducts, defaultSearch, multipleCalendars, passagemSearchUrl, segurosSearchUrl, elquartoSearchUrl, mobile, }: SearchFrameWideProps): JSX.Element;
export {};
