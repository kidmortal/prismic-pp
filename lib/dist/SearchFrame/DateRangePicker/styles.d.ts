import { CSSProperties } from 'react';
export declare type CustomStyles = {
    HeaderContainer?: CSSProperties;
    HeaderButton?: CSSProperties;
    HeaderYear?: CSSProperties;
    HeaderMonth?: CSSProperties;
    CalendarContainer?: CSSProperties;
    WeekdaysLabelsContainer?: CSSProperties;
    WeekdayLabel?: CSSProperties;
    DaysContainer?: CSSProperties;
    DaySlot?: CSSProperties;
    ColorPallet?: ColorPalletProps;
};
declare type ColorPalletProps = {
    backgroundColor?: {
        empty?: string;
        disabled?: string;
        firstSelected?: string;
        lastSelected?: string;
        between?: string;
        allowed?: string;
    };
    backgroundHoverColor?: {
        empty?: string;
        disabled?: string;
        firstSelected?: string;
        lastSelected?: string;
        allowed?: string;
    };
    fontColor?: {
        empty?: string;
        disabled?: string;
        firstSelected?: string;
        lastSelected?: string;
        allowed?: string;
    };
};
export declare type Status = 'EMPTY' | 'DISABLED' | 'SELECTED-FIRST' | 'SELECTED-LAST' | 'ALLOWED-FIRST' | 'ALLOWED-LAST' | 'BETWEEN';
declare type DaySlotProps = {
    status: Status;
    colorPallet?: ColorPalletProps;
};
export declare const DaySlot: import("styled-components").StyledComponent<"div", any, DaySlotProps, never>;
declare type ContainerProps = {
    visible?: boolean;
    multiple?: boolean;
};
export declare const Container: import("styled-components").StyledComponent<"div", any, ContainerProps, never>;
export declare const Header: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderLabel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderMonth: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderYear: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderButton: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MonthContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const WeekdaysLabels: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const WeekdayLabel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DaysContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MultipleMonthsContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderLabelGap: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
