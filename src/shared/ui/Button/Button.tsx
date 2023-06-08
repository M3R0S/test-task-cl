import { FC } from "react";
import classNames from "classnames";

import cl from "./Button.module.scss";
import { ButtonProps } from "./Button.types";
import cls from "../shared/shared.module.scss"

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = "filling",
        size = "14",
        ...otherProps
    } = props;

    const additional = [
        className,
        cl[`size_${size}`],
        cls[theme],
    ];

    return (
        <button
        
            className={classNames(cl.button, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
};

