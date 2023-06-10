import { HTMLAttributes } from "react";

import { HStackProps } from "./HStack.types";
import { Flex } from "../Flex/Flex";

export const HStack = <A extends HTMLAttributes<HTMLElement>>(props: HStackProps & A) => {
    return (
        <Flex<A>
            alignItems="center"
            direction="row"
            {...props}
        />
    );
};
