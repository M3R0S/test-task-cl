import { ChangeHandler, RefCallBack } from "react-hook-form";

export interface RadioGroupOption<T> {
    value?: T;
    label?: string;
    id?: string;
}

export interface RadioGroupProps<T> {
    className?: string;
    options: RadioGroupOption<T>[];
    label?: string;
    name: string;
    ref: RefCallBack;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    validateMessage?: string
}
