/// <reference types="react" />
declare type DefaultSearch = 'PASSAGEM' | 'SEGURO' | 'ELQUARTO';
declare type FrameTitles = {
    passagem: string;
    elquarto: string;
    seguro: string;
};
declare type SearchFrameProps = {
    /** Which product will be select by default when the page is loaded, can also be provided on the url by sending ?defaultsearch="PASSAGEM" */
    defaultSearch: DefaultSearch;
    passagemSearchUrl: string;
    segurosSearchUrl: string;
    elquartoSearchUrl: string;
    /** Hides others products tabs, if enabled the user wont be able to switch between products. */
    hideProducts?: boolean;
    /** Shows two calendars instead of one */
    multipleCalendars?: boolean;
    /** If enabled, the calendar will change its direction to top side if screen height is smaller than 900px */
    autoPositionCalendar?: boolean;
    /** If enabled, the current url params will be carried over the search links, in case of duplicated values, url param is prioritized */
    persistUrlParams?: boolean;
    /** When mobile is enabled, some inputs will turn into fullscreen modals */
    mobile?: boolean;
    /** Switch between two layouts */
    size: 'WIDE' | 'THIN';
    /** What text will be shown on search product frame */
    frameTitles: FrameTitles;
};
export declare function SearchFrame({ hideProducts, defaultSearch, multipleCalendars, passagemSearchUrl, segurosSearchUrl, elquartoSearchUrl, persistUrlParams, frameTitles, autoPositionCalendar, mobile, size, }: SearchFrameProps): JSX.Element;
export {};
