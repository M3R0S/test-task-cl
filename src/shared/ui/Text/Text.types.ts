import { AllHTMLAttributes, ReactNode } from "react";

export type TextTheme = "green" | "red" | "primary" | "secondary" | "purple";

export type TextTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

export type TextSize = "20_600" | "14_400" | "14_600" | "12_400";

export type TextAlign = "center" | "end" | "start";

export interface TextProps extends Omit<AllHTMLAttributes<HTMLElement>, "size"> {
    children: ReactNode;
    Tag?: TextTag;
    theme?: TextTheme;
    size?: TextSize;
    align?: TextAlign;
}
