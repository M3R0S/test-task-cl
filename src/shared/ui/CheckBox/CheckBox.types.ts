import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface CheckBoxProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    label?: string;
}
