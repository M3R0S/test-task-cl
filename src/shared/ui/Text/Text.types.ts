import { HTMLAttributes, ReactNode } from "react";

export type TextTheme = "green" | "red" | "primary" | "secondary" | "purple"

export type TextTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextSize = "20_600" | "14_400" | "14_600" | "12_400";

export type TextAttributes = HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>;

export interface TextProps extends TextAttributes {
    children: ReactNode;
    Tag?: TextTag;
    theme?: TextTheme;
    size?: TextSize;
}

