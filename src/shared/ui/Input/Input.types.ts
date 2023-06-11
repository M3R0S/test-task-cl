import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputTheme = "primary" | "secondary";
export type InputSize = "300" | "400";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    theme?: InputTheme;
    label?: string;
    validateMessage?: string; // Ошибка валидации
    isValidate?: boolean // Нужна ли валидация
    isDirty?: boolean // Были ли изменения
}
