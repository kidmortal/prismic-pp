import { ReactNode } from 'react';
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
declare type AutoCompleteModalProps = {
    id?: string;
    label?: string;
    modalLabel?: string;
    clearable?: boolean;
    value: IAutoComplete.Value | null;
    setValue: (value: IAutoComplete.Value | null) => void;
    onInputChange: (change: string) => void;
    onFocus?: () => void;
    options: IAutoComplete.CategoryOptions[];
    setOptions: (options: any) => void;
    placeholder?: string;
    leftIcon?: ReactNode;
    joinLeft?: boolean;
    joinRight?: boolean;
    hasError?: boolean;
    errorMessage?: string;
};
export declare function AutoCompleteModal({ leftIcon, id, joinLeft, joinRight, label, modalLabel, value, placeholder, options, hasError, errorMessage, clearable, setOptions, onFocus, onInputChange, setValue, }: AutoCompleteModalProps): JSX.Element;
export {};
