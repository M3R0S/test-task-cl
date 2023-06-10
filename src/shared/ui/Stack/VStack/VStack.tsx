import { HTMLAttributes } from "react";

import { VStackProps } from "./VStack.types";
import { Flex } from "../Flex/Flex";

export const VStack = <A extends HTMLAttributes<HTMLElement>>(props: VStackProps & A) => {
    return (
        <Flex<A>
            direction="column"
            {...props}
        />
    );
};
