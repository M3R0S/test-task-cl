import classNames from "classnames";

import cl from "./Text.module.scss";
import { TextProps } from "./Text.types";

export const Text = (props: TextProps) => {
    const {
        className,
        children,
        Tag = "span",
        theme = "primary",
        size = "14_400",
        align,
        ...otherProps
    } = props;

    return (
        <Tag
            className={classNames(cl.text, cl[theme], cl[`size_${size}`], cl[`align_${align}`], className)}
            {...otherProps}
        >
            {children}
        </Tag>
    );
};
