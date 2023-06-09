import { FC } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import cl from "./AppLink.module.scss";
import { AppLinkProps } from "./AppLink.types";
import cls from "../shared/shared.module.scss";

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, size = "14", theme = "filling", to, gap, ...otherProps } = props;

    return (
        <Link
            to={to}
            className={classNames(cl.applink, className, cls[`size_${size}`], cls[theme], cls[`gap_${gap}`])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
