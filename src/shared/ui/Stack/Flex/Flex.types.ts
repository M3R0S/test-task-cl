import { ReactNode, HTMLAttributes } from "react";

export type FlexJustifyContent = "normal" | "start" | "center" | "end" | "space_between";
export type FlexAlignItems = "normal" | "start" | "center" | "end";
export type FlexDirection = "column" | "row";
export type FlexGap =
    | "2"
    | "4"
    | "6"
    | "8"
    | "10"
    | "12"
    | "14"
    | "16"
    | "18"
    | "20"
    | "22"
    | "24"
    | "26"
    | "28"
    | "30"
    | "32"
    | "34"
    | "36"
    | "38"
    | "40"
    | "42"
    | "44"
    | "46"
    | "48"
    | "50"
    | "56"
    | "64"
    | "86";
export type FlexWrap = "nowrap" | "wrap";
export type FlexTag = "div" | "section" | "nav"
export type FlexGrow = "1";

export interface FlexProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children: ReactNode;
    Tag?: FlexTag;
    justifyContent?: FlexJustifyContent;
    alignItems?: FlexAlignItems;
    direction: FlexDirection;
    rowGap?: FlexGap;
    columnGap?: FlexGap;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
    grow?: FlexGrow;
}

