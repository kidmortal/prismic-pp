/// <reference types="react" />
declare type SearchFrameThinProps = {
    defaultSearch: 'PASSAGEM' | 'SEGURO' | 'ELQUARTO';
    passagemSearchUrl: string;
    segurosSearchUrl: string;
    elquartoSearchUrl: string;
    hideProducts?: boolean;
    multipleCalendars?: boolean;
    mobile?: boolean;
};
export declare function SearchFrameThin({ hideProducts, defaultSearch, multipleCalendars, passagemSearchUrl, segurosSearchUrl, elquartoSearchUrl, mobile, }: SearchFrameThinProps): JSX.Element;
export {};
