import { FC, forwardRef, memo } from "react";
import classNames from "classnames";

import cl from "./Input.module.scss";
import { InputProps } from "./Input.types";
import { VStack } from "../Stack";
import { Text } from "../Text";

export const Input: FC<InputProps> = memo(
    forwardRef<HTMLInputElement, InputProps>((props, ref) => {
        const {
            className,
            theme = "primary",
            size = "300",
            label,
            validateMessage,
            isValidate = true,
            isDirty = false,
            ...otherProps
        } = props;

        const isValid = !validateMessage; // Если сообщение есть - значит инпут не валидный

        return (
            <VStack gap="8">
                {label && <label className={cl.label}>{label}</label>}
                <input
                    ref={ref}
                    className={classNames(
                        cl.input,
                        className,
                        cl[theme],
                        { [cl.valid]: isValid && isDirty, [cl.not_valid]: !isValid },
                        cl[`size_${size}`]
                    )}
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
