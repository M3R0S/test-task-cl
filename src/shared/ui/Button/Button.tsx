import { FC } from "react";
import classNames from "classnames";

import cl from "./Button.module.scss";
import { ButtonProps } from "./Button.types";
import cls from "../shared/shared.module.scss";

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = "filling",
        size = "14",
        isDisabled = false,
        gap,
        themeType = "text",
        ...otherProps
    } = props;

    return (
        <button
            disabled={isDisabled}
            className={classNames(
                cl.button,
                className,
                cls[`size_${size}`],
                cls[theme],
                cls[themeType],
                cls[`gap_${gap}`],
                { [cls.disabled]: isDisabled }
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
