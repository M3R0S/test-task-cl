import { FC, SVGProps } from "react";

export type SvgTheme = "clear" | "grey" | "purple"

export interface SvgProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    theme?: SvgTheme
}
