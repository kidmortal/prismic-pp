import { CSSProperties, ReactNode } from 'react';
export declare namespace IAutoComplete {
    type Value = {
        value: any;
        label: string;
        isDisabled?: boolean;
    };
    type CategoryOptions = {
        categoryName: string;
        categoryIconUrl: ReactNode;
        categoryColor: string;
        categoryLabelColor: string;
        options: Value[];
    };
}
export interface SelectProps {
    setOption: (option: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    leftIconClick?: () => void;
    id?: string;
    option?: string;
    options: string[];
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    leftIcon?: ReactNode;
    leftIconStyle?: CSSProperties;
    joinLeft?: boolean;
    joinRight?: boolean;
    noBorderLeft?: boolean;
    noBorderRight?: boolean;
    noBorderTop?: boolean;
    noBorderBottom?: boolean;
    hasError?: boolean;
    errorMessage?: string;
}
export declare function Select({ leftIcon, leftIconStyle, leftIconClick, label, id, joinLeft, joinRight, noBorderBottom, noBorderLeft, noBorderRight, noBorderTop, disabled, option, options, setOption, onFocus, hasError, errorMessage, placeholder, }: SelectProps): JSX.Element;
