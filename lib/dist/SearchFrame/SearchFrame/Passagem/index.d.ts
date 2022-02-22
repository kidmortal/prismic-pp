/// <reference types="react" />
declare type PassagemProps = {
    size: 'WIDE' | 'THIN';
    url: string;
    mobile?: boolean;
    multipleCalendars?: boolean;
    autoPositionCalendar?: boolean;
    persistUrlParams?: boolean;
    frameTitle: string;
};
export declare function Passagem({ size, url, persistUrlParams, frameTitle, ...rest }: PassagemProps): JSX.Element;
export {};
