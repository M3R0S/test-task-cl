import { forwardRef, memo } from "react";
import classNames from "classnames";

import cl from "./CheckBox.module.scss";
import { CheckBoxProps } from "./CheckBox.types";
import { HStack } from "../Stack";
import { Text } from "../Text";

export const CheckBox = memo(
    forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
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
                    type="checkbox"
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
