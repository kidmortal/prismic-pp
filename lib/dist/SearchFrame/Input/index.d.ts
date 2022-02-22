import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    leftIcon?: ReactNode;
    leftIconStyle?: CSSProperties;
    rightIcon?: ReactNode;
    RightIconStyle?: CSSProperties;
    leftIconClick?: () => void;
    rightIconClick?: () => void;
    joinLeft?: boolean;
    joinRight?: boolean;
    noBorderLeft?: boolean;
    noBorderRight?: boolean;
    noBorderTop?: boolean;
    noBorderBottom?: boolean;
    hasError?: boolean;
    errorMessage?: string;
}
export declare function Input({ leftIcon, rightIcon, leftIconStyle, RightIconStyle, leftIconClick, rightIconClick, label, joinLeft, joinRight, noBorderBottom, noBorderLeft, noBorderRight, noBorderTop, disabled, hasError, errorMessage, ...rest }: InputProps): JSX.Element;
