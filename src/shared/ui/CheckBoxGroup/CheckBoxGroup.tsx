import { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";

import cl from "./CheckBoxGroup.module.scss";
import { CheckBoxGroupProps } from "./CheckBoxGroup.types";
import { VStack } from "../Stack";
import { Text } from "../Text";
import { CheckBox } from "../CheckBox/CheckBox";

import { genericMemo } from "shared/lib/helpers/genericMemo";

const CheckBoxGroup = <T extends number | string>(
    props: CheckBoxGroupProps<T>,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const { className, options, label, name, onBlur, onChange } = props;
    return (
        <VStack className={classNames(cl.checkboxgroup, className)}>
            {label && <Text Tag="label">{label}</Text>}
            {options.map(({ label, value, id }) => (
                <CheckBox
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
        </VStack>
    );
};

const ForwardRefCheckBoxGroup = forwardRef(CheckBoxGroup) as <T extends string | number>(
    props: CheckBoxGroupProps<T> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof CheckBoxGroup>;

export const MemoCheckBoxGroup = genericMemo(ForwardRefCheckBoxGroup);
