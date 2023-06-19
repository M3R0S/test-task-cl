import { FC, ForwardedRef, forwardRef, memo } from "react";

import { SexSelectProps } from "./SexSelect.types";
import { Sex, SexKey } from "../../model/types/sexState";

import { Dropdown, SelectOptions } from "shared/ui/Dropdown";

const options: SelectOptions<keyof typeof Sex, Sex>[] = [
    {
        label: "Мужчина",
        value: "man",
    },
    {
        label: "Женщина",
        value: "woman",
    },
];

export const SexSelect: FC<SexSelectProps> = memo(
    forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
        const { className, value, defaultValue, name, onBlur, onChange, validateMessage, isDirty } =
            props;

        return (
            <Dropdown<SexKey, Sex>
                value={value}
                options={options}
                defaultValue={defaultValue}
                className={className}
                name={name}
                placeholder="Не выбрано"
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
                label="Пол"
                validateMessage={validateMessage}
                isDirty={isDirty}
            />
        );
    })
);
