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
    } = props;

    return (
        <VStack rowGap="8">
            {label && (
                <Text
                    theme="primary"
                    size="14_400"
                    Tag="label"
                    htmlFor={name}
                >
                    {label}
                </Text>
            )}
            <Select
                openMenuOnFocus
                name={name}
                id={name}
                unstyled
                isSearchable={false}
                onBlur={onBlur}
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
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                className={classNames(cl.dropdown, className)}
                ref={ref}
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

const ForwardRefDropdown = forwardRef(Dropdown) as <T extends string, K extends string>(
    props: DropdownProps<T, K> & { ref?: ForwardedRef<HTMLUListElement> }
) => ReturnType<typeof Dropdown>;

export const MemoDropdown = genericMemo(ForwardRefDropdown);
