import { ReactNode } from "react";

export type CreateElement = () => HTMLDivElement

export interface PortalProps {
    children: ReactNode;
    className?: string;
    parentElement?: HTMLElement;
}
