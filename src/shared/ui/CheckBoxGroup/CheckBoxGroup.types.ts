import { RefCallBack, ChangeHandler } from "react-hook-form";

export interface CheckBoxGroupOption<T> {
    value?: T;
    label?: string;
    id?: string;
}

export interface CheckBoxGroupProps<T> {
    className?: string;
    options: CheckBoxGroupOption<T>[];
    label?: string;
    name: string;
    ref: RefCallBack;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
}
