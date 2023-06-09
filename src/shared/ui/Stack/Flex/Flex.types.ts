import { ReactNode, HTMLAttributes } from "react";

import { SharedGap } from "../../shared/shared.types";

export type FlexJustifyContent = "normal" | "start" | "center" | "end" | "space_between";
export type FlexAlignItems = "normal" | "start" | "center" | "end";
export type FlexDirection = "column" | "row";
export type FlexWrap = "nowrap" | "wrap";
export type FlexTag = "div" | "section" | "nav" | "header";
export type FlexGrow = "1";

export interface FlexProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children: ReactNode;
    Tag?: FlexTag;
    justifyContent?: FlexJustifyContent;
    alignItems?: FlexAlignItems;
    direction: FlexDirection;
    wrap?: FlexWrap;
    gap?: SharedGap;
    max?: boolean;
    grow?: FlexGrow;
}
