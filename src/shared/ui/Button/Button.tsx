import { FC } from "react";
import classNames from "classnames";

import cl from "./Button.module.scss";
import { ButtonProps } from "./Button.types";
import cls from "../shared/shared.module.scss";

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = "filling", size = "14", gap, ...otherProps } = props;

    return (
        <button
            className={classNames(cl.button, className, cls[`size_${size}`], cls[theme], cls[`gap_${gap}`])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
