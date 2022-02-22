/// <reference types="react" />
import { CustomStyles } from './styles';
export declare type DateRangePickerSelecting = 'first' | 'last';
declare type DateRangePickerProps = {
    first: Date;
    last?: Date;
    /** shows calendar */
    visible?: boolean;
    /** What is the first date that can be selected */
    startDate?: Date;
    /** What is the limit date that can be selected */
    limitDate?: Date;
    /** Determines which value will be changed next time the user selects a day, if none is provided it will toggle between first and last automatically */
    isSelecting?: DateRangePickerSelecting;
    /** Shows to calendars instead of one, usually for when using as a range picker */
    multiple?: boolean;
    /** Only selects first value, when this is enabled the user cant use it as a range picker, its a single date calendar */
    singleDate?: boolean;
    /** Give a custom name to the week's day, used for translating it to other language */
    weekdaysName?: string[];
    /** Give a custom name to the month's names, used for translating it to other language */
    monthsName?: string[];
    /** Allows you to customize some css, works better if you import the customStyles type, for better intelisense */
    customStyles?: CustomStyles;
    /** Callback whenever the first date is selected, in case you wanna do something in between, like setting a state, redux, etc */
    onFirstDateSelected: (first: Date) => void;
    /** Callback whenever the last date is selected, in case you wanna do something in between, like setting a state, redux, etc */
    onLastDateSelected: (last: Date | undefined) => void;
    /** Callback whenever the first and last date are both selected, or just first in case you using single calendar, in case you wanna do something in between, like setting a state, redux, etc */
    onSelectionComplete: () => void;
};
export declare function DateRangePicker({ first, last, visible, isSelecting, startDate, limitDate, multiple, singleDate, customStyles, weekdaysName, monthsName, onFirstDateSelected, onLastDateSelected, onSelectionComplete, }: DateRangePickerProps): JSX.Element;
export {};
