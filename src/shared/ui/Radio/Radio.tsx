import { forwardRef, memo } from "react";
import classNames from "classnames";

import cl from "./Radio.module.scss";
import { RadioProps } from "./Radio.types";
import { HStack } from "../Stack";
import { Text } from "../Text";

export const Radio = memo(
    forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
        const { className, label, id, ...otherProps } = props;

        return (
            <HStack
                columnGap="8"
                className={classNames(cl.checkbox, className)}
            >
                <input
                    {...otherProps}
                    id={id}
                    ref={ref}
                    type="radio"
                    className={cl.input}
                />
                {label && (
                    <Text
                        theme="primary"
                        Tag="label"
                        htmlFor={id}
                    >
                        {label}
                    </Text>
                )}
            </HStack>
        );
    })
);
