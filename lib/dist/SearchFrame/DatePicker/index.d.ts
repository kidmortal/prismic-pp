/// <reference types="react" />
import { DateRangePickerSelecting } from '../DateRangePicker';
declare type DatePickerProps = {
    start: Date;
    end: Date;
    startLimit?: Date;
    endLimit?: Date;
    isSelecting?: DateRangePickerSelecting;
    setIsSelecting?: (val: DateRangePickerSelecting) => void;
    setStart: (date: Date) => void;
    setEnd: (date: Date | undefined) => void;
    visible: boolean;
    modalTitle?: string;
    setVisible: (visible: boolean) => void;
    mobile?: boolean;
    multipleCalendars?: boolean;
    autoPositionCalendar?: boolean;
    singleDate?: boolean;
};
export declare function DatePicker({ start, end, setStart, setEnd, startLimit, endLimit, isSelecting, visible, modalTitle, setIsSelecting, setVisible, singleDate, autoPositionCalendar, mobile, multipleCalendars, }: DatePickerProps): JSX.Element;
export {};
