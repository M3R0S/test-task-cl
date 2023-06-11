import { FC } from "react";
import classNames from "classnames";

import cl from "./Page.module.scss";
import { PageProps } from "./Page.types";

export const Page: FC<PageProps> = (props) => {
    const { className, children } = props;

    return <main className={classNames(cl.page, className)}>{children}</main>;
};
