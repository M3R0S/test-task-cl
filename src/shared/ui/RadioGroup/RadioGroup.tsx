import { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";

import cl from "./RadioGroup.module.scss";
import { RadioGroupProps } from "./RadioGroup.types";
import { VStack } from "../Stack";
import { Radio } from "../Radio/Radio";
import { Text } from "../Text";

import { genericMemo } from "shared/lib/helpers/genericMemo";

const RadioGroup = <T extends number | string>(
    props: RadioGroupProps<T>,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const { className, options, label, name, onBlur, onChange, validateMessage } = props;
    return (
        <VStack className={classNames(cl.checkboxgroup, className)}>
            {label && <Text Tag="label">{label}</Text>}
            {options.map(({ label, value, id }) => (
                <Radio
                    key={value}
                    label={label}
                    ref={ref}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    id={id}
                />
            ))}
            {validateMessage && (
                <Text
                    theme="red"
                    size="14_400"
                    Tag="p"
                >
                    {validateMessage}
                </Text>
            )}
        </VStack>
    );
};

const ForwardRefRadioGroup = forwardRef(RadioGroup) as <T extends string | number>(
    props: RadioGroupProps<T> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof RadioGroup>;

export const MemoRadioGroup = genericMemo(ForwardRefRadioGroup);
