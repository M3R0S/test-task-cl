import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface TextareaProps
    extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    className?: string;
    label?: string;
    validateMessage?: string; // Ошибка валидации
    isDirty?: boolean; // Были ли изменения
    quantitySymbols?: number;
}
