import { forwardRef, memo } from "react";
import classNames from "classnames";

import cl from "./Textarea.module.scss";
import { TextareaProps } from "./Textarea.types";
import { HStack, VStack } from "../Stack";
import { Text } from "../Text/Text";

export const Textarea = memo(
    forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
        const {
            className,
            label,
            validateMessage,
            isDirty = false,
            name,
            id,
            quantitySymbols,
            ...otherProps
        } = props;

        const isValid = !validateMessage; // Если сообщение есть - значит textarea не валидный

        return (
            <VStack gap="8">
                {label && (
                    <Text
                        Tag="label"
                        htmlFor={id}
                        theme="primary"
                        size="14_400"
                    >
                        {label}
                    </Text>
                )}
                <textarea
                    name={name}
                    id={id}
                    ref={ref}
                    className={classNames(cl.textarea, className, {
                        [cl.valid]: isValid && isDirty,
                        [cl.not_valid]: !isValid,
                    })}
                    {...otherProps}
                />
                <HStack className={cl.text_wrapper} justifyContent="space_between">
                    <Text
                        Tag="p"
                        className={cl.text}
                        size="12_400"
                        theme="red"
                    >
                        {validateMessage}
                    </Text>
                    <Text
                        Tag="p"
                        className={cl.symbols}
                        size="12_400"
                        theme="primary"
                        title="Количество символов без учёта пробелов"
                    >
                        {quantitySymbols}
                    </Text>
                </HStack>
            </VStack>
        );
    })
);
