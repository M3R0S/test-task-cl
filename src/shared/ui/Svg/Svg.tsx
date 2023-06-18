import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Svg.module.scss";
import { SvgProps } from "./Svg.types";

export const Svg: FC<SvgProps> = memo((props) => {
    const { className, Svg, theme = "clear" } = props;

    return <Svg className={classNames(cl.svg, className, cl[theme])} />;
});

