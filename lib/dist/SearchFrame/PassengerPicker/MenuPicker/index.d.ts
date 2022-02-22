/// <reference types="react" />
declare type MenuPickerProps = {
    name: string;
    info: string;
    value: number;
    disableIncrement?: boolean;
    disableDecrement?: boolean;
    onMinusClick: () => void;
    onPlusClick: () => void;
    mobile?: boolean;
};
export declare function MenuPicker({ name, info, value, mobile, disableIncrement, disableDecrement, onMinusClick, onPlusClick, }: MenuPickerProps): JSX.Element;
export {};
