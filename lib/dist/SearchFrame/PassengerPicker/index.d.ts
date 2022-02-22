import { ReactNode } from 'react';
export declare type PassengerPickerValues = {
    rooms?: number;
    adults?: number;
    childs?: number;
    infants?: number;
    setRooms?: (value: number) => void;
    setAdults?: (value: number) => void;
    setChilds?: (value: number) => void;
    setInfants?: (value: number) => void;
};
export declare type PassengerPickerRules = {
    rooms?: boolean;
    adults?: boolean;
    childs?: boolean;
    infants?: boolean;
};
export declare type PassengerPickerLabels = {
    rooms?: string;
    adults?: string;
    childs?: string;
    infants?: string;
};
declare type PassengerPickerProps = {
    id?: string;
    value?: string;
    values: PassengerPickerValues;
    mobile?: boolean;
    modalTitle?: string;
    hasError?: boolean;
    errorMessage?: string;
    childsAge?: number[];
    setChildsAge?: (childsAge: number[]) => void;
    onFocus?: () => void;
    label?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    joinLeft?: boolean;
    joinRight?: boolean;
    noBorderLeft?: boolean;
    noBorderRight?: boolean;
    noBorderTop?: boolean;
    noBorderBottom?: boolean;
    infoLabel?: PassengerPickerLabels;
    disableDecrement?: PassengerPickerRules;
    disableIncrement?: PassengerPickerRules;
};
export declare function PassengerPicker({ mobile, id, label, value, hasError, errorMessage, leftIcon, rightIcon, joinLeft, joinRight, childsAge, modalTitle, setChildsAge, onFocus, noBorderRight, noBorderBottom, noBorderLeft, values, infoLabel, disableDecrement, disableIncrement, }: PassengerPickerProps): JSX.Element;
export {};
