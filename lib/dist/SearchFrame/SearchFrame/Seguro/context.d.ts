import React, { ReactNode } from 'react';
import { DateRangePickerSelecting } from '../../DateRangePicker';
interface ISegurosContextProps {
    start: any;
    end: any;
    startError: string;
    endError: string;
    destino: string;
    destinoError: string;
    startLimit: Date;
    endLimit: Date;
    calendarOpen: boolean;
    CalendarRef: any;
    Options: string[];
    selecting?: DateRangePickerSelecting;
    datePickerModalText: string;
    frameTitle: string;
    setSelecting: (val: DateRangePickerSelecting) => void;
    setStart: (val: any) => void;
    setEnd: (val: any) => void;
    setStartError: (val: string) => void;
    setEndError: (val: string) => void;
    setDestino: (val: string) => void;
    setDestinoError: (val: string) => void;
    setCalendarOpen: (val: boolean) => void;
    RedirectUrl: () => void;
}
declare type SegurosProviderProps = {
    children: ReactNode;
    url: string;
    persistUrlParams?: boolean;
    frameTitle: string;
};
export declare const SegurosContext: React.Context<ISegurosContextProps>;
export declare const UseSeguros: () => ISegurosContextProps;
export declare function SegurosProvider({ children, url, persistUrlParams, frameTitle }: SegurosProviderProps): JSX.Element;
export {};
