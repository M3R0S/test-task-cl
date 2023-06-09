import { ButtonHTMLAttributes, ReactNode } from "react";

import { SharedGap, SharedSize, SharedTheme } from "../shared/shared.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: SharedTheme;
    size?: SharedSize;
    gap?: SharedGap;
}
