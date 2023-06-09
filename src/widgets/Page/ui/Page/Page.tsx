import { FC } from "react";
import classNames from "classnames";

import cl from "./Page.module.scss";
import { PageProps } from "./Page.types";

import { VStack } from "shared/ui/Stack";

export const Page: FC<PageProps> = (props) => {
    const { className, children } = props;

    return (
        <VStack
            Tag="main"
            className={classNames(cl.page, className)}
        >
            {children}
        </VStack>
    );
};
