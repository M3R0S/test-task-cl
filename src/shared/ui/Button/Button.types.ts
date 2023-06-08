import { ButtonHTMLAttributes, ReactNode } from "react";

import { SharedSize, SharedTheme } from "../shared/shared.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: SharedTheme;
    size?: SharedSize;
}
