import { FC } from "react";
import classNames from "classnames";

import cl from "./Flex.module.scss";
import cls from "../../shared/shared.module.scss"
import { FlexProps } from "./Flex.types";

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        Tag = "div",
        children,
        direction,
        alignItems = "normal",
        justifyContent = "normal",
        gap,
        max,
        wrap = "nowrap",
        grow,
        ...otherProps
    } = props;

    const classes = [
        className,
        cl[`justify_content_${justifyContent}`],
        cl[`align_items_${alignItems}`],
        cl[`direction_${direction}`],
        cl[`wrap_${wrap}`],
    ];

    const mods = {
        [cls[`gap_${gap}`]]: Boolean(gap),
        [cl.max]: Boolean(max),
        [cl[`grow_${grow}`]]: Boolean(grow),
    };

    return (
        <Tag
            className={classNames(cl.flex, classes, mods)}
            {...otherProps}
        >
            {children}
        </Tag>
    );
};

