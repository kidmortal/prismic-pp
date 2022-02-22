/// <reference types="react" />
declare type SearchFrameProps = {
    defaultSearch: 'PASSAGEM' | 'SEGURO' | 'ELQUARTO';
    passagemSearchUrl: string;
    segurosSearchUrl: string;
    elquartoSearchUrl: string;
    hideProducts?: boolean;
    multipleCalendars?: boolean;
    mobile?: boolean;
    size: 'WIDE' | 'THIN';
};
export declare function SearchFrameResize(props: SearchFrameProps): JSX.Element;
export {};
