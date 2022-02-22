/// <reference types="react" />
declare type ChildsAgePickerProps = {
    childs: number;
    childsAge: number[];
    childsAgeError?: boolean;
    setChildsAge: (ages: number[]) => void;
};
export declare function ChildsAgePicker({ childs, childsAge, childsAgeError, setChildsAge }: ChildsAgePickerProps): JSX.Element;
export {};
