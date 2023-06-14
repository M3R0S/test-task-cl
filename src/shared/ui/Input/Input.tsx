import { forwardRef, memo } from "react";
import classNames from "classnames";

import cl from "./Input.module.scss";
import { InputProps } from "./Input.types";
import { VStack } from "../Stack";
import { Text } from "../Text";

export const Input = memo(
    forwardRef<HTMLInputElement, InputProps>((props, ref) => {
        const {
            className,
            theme = "primary",
            label,
            validateMessage,
            isValidate = true,
            isDirty = false,
            name,
            ...otherProps
        } = props;

        const isValid = !validateMessage; // Если сообщение есть - значит инпут не валидный

        return (
            <VStack gap="8">
                {label && (
                    <Text
                        Tag="label"
                        htmlFor={name}
                        theme="primary"
                        size="14_400"
                    >
                        {label}
                    </Text>
                )}
                <input
                    name={name}
                    id={name}
                    ref={ref}
                    className={classNames(cl.input, className, cl[theme], {
                        [cl.valid]: isValid && isDirty,
                        [cl.not_valid]: !isValid,
                    })}
                    {...otherProps}
                />
                {isValidate && (
                    <Text
                        Tag="p"
                        className={cl.text}
                        size="12_400"
                        theme="red"
                    >
                        {validateMessage}
                    </Text>
                )}
            </VStack>
        );
    })
);
