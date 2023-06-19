import { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import Select from "react-select";

import cl from "./Dropdown.module.scss";
import { DropdownProps } from "./Dropdown.types";
import { VStack } from "../Stack";
import { Text } from "../Text";

import { genericMemo } from "shared/lib/helpers/genericMemo";

const Dropdown = <T extends string, K extends string>(props: DropdownProps<T, K>, ref: any) => {
    const {
        className,
        options,
        onChange,
        name,
        isValidate = true,
        validateMessage,
        placeholder,
        label,
        isDirty,
        onBlur,
        value,
        id,
        defaultValue,
    } = props;

    return (
        <VStack rowGap="8">
            {label && (
                <Text
                    theme="primary"
                    size="14_400"
                    Tag="label"
                    htmlFor={id}
                >
                    {label}
                </Text>
            )}
            <Select
                value={value || defaultValue}
                name={name}
                openMenuOnFocus
                id={id}
                ref={ref}
                unstyled
                isSearchable={false}
                onBlur={onBlur}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                className={classNames(cl.dropdown, className)}
                classNames={{
                    option: (state) => classNames(cl.option, { [cl.focus]: state.isFocused }),
                    container: (state) =>
                        classNames(cl.container, {
                            [cl.focus]: state.isFocused && state.selectProps.menuIsOpen,
                            [cl.not_valid]: validateMessage,
                            [cl.valid]:
                                !validateMessage && isDirty && !state.selectProps.menuIsOpen,
                        }),
                    control: () => cl.control,
                    dropdownIndicator: (state) =>
                        classNames(cl.indicator, { [cl.open]: state.selectProps.menuIsOpen }),
                    indicatorsContainer: () => cl.indicators_container,
                    placeholder: () => cl.placeholder,
                    menu: () => cl.menu,
                    menuList: () => cl.menu_list,
                    singleValue: () => cl.value,
                }}
            />
            {isValidate && (
                <Text
                    className={cl.text}
                    Tag="p"
                    theme="red"
                    size="12_400"
                >
                    {validateMessage}
                </Text>
            )}
        </VStack>
    );
};

// Приведение типов, для нормализации работы дженнериков компонента
const ForwardRefDropdown = forwardRef(Dropdown) as <T extends string, K extends string>(
    props: DropdownProps<T, K> & { ref?: ForwardedRef<HTMLElement> }
) => ReturnType<typeof Dropdown>;

export const MemoDropdown = genericMemo(ForwardRefDropdown);
