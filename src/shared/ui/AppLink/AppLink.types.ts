import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

import { SharedGap, SharedSize, SharedTheme } from "../shared/shared.types";

export interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: SharedTheme;
    size?: SharedSize;
    gap?: SharedGap;
}
