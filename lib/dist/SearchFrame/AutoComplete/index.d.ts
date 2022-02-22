import { CSSProperties, ReactNode } from 'react';
export declare namespace IAutoComplete {
    type Value = {
        value: any;
        label: string;
        isDisabled?: boolean;
        props?: any;
    };
    type CategoryOptions = {
        categoryName: string;
        categoryIconUrl: ReactNode;
        categoryColor: string;
        categoryLabelColor: string;
        options: Value[];
    };
}
export interface AutoCompleteProps {
    setOptions: (options: IAutoComplete.CategoryOptions[]) => void;
    onInputChange: (value: string) => void;
    onFocus?: (value: string) => void;
    onBlur?: (value: string) => void;
    leftIconClick?: () => void;
    clearable?: boolean;
    option?: IAutoComplete.Value | null;
    setOption: (option: IAutoComplete.Value | null) => void;
    value: string;
    setValue: (value: string) => void;
    options: IAutoComplete.CategoryOptions[];
    noOptionsMessage?: string;
    label?: string;
    id?: string;
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
export declare function AutoComplete({ leftIcon, leftIconStyle, leftIconClick, label, joinLeft, joinRight, noBorderBottom, noBorderLeft, noBorderRight, noBorderTop, disabled, id, options, errorMessage, clearable, noOptionsMessage, setOptions, setOption, onInputChange, onFocus, onBlur, value, setValue, hasError, placeholder, }: AutoCompleteProps): JSX.Element;
