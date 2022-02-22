import { ReactNode } from 'react';
declare type ButtonProps = {
    children: ReactNode;
    variant: 'WIDE' | 'THIN';
    onClick?: () => void;
    joinLeft?: boolean;
    rounded?: boolean;
    color?: string;
    id?: string;
};
export declare function Button({ joinLeft, children, rounded, color, id, variant, onClick }: ButtonProps): JSX.Element;
export {};
