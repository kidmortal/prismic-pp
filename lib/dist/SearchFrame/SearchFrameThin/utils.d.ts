import moment from "moment";
declare type FormatDateToOptions = "DD/MM/YYYY" | "DDMMYYYY" | "YYMMDD" | "YY/MM/DD";
export declare function FormatDateTo(d: moment.Moment, format: FormatDateToOptions): string;
export {};
