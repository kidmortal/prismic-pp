/// <reference types="react" />
declare type ElquartoProps = {
    size: 'WIDE' | 'THIN';
    url: string;
    mobile?: boolean;
    multipleCalendars?: boolean;
    autoPositionCalendar?: boolean;
    persistUrlParams?: boolean;
    frameTitle: string;
};
export declare function Elquarto({ size, url, persistUrlParams, frameTitle, ...rest }: ElquartoProps): JSX.Element;
export {};
