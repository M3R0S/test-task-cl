import { FC, memo } from "react";

import { SvgProps } from "./Svg.types";

export const Svg: FC<SvgProps> = memo((props) => {
    const { className, Svg } = props;

    return <Svg className={className} />;
});

