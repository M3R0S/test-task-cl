import { InputHTMLAttributes } from "react";

export type InputTheme = "primary" | "secondary"
export type InputSize = "300" | "400"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    className?: string;
    theme?: InputTheme
    size?: InputSize
}

