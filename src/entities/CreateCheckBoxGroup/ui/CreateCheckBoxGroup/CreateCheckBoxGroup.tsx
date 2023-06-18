import { FieldValues } from "react-hook-form";

import { CreateCheckBoxGroupProps } from "./CreateCheckBoxGroup.types";

import { CheckBoxGroup, CheckBoxGroupOption } from "shared/ui/CheckBoxGroup";

export const CreateCheckBoxGroup = <T extends FieldValues>(props: CreateCheckBoxGroupProps<T>) => {
    const { className, register, name } = props;
    const defaultCheckBoxOptions: CheckBoxGroupOption<number>[] = [
        {
            value: 1,
            label: "1",
            id: "field-checkbox-group-option-1",
        },
        {
            value: 2,
            label: "2",
            id: "field-checkbox-group-option-2",
        },
        {
            value: 3,
            label: "3",
            id: "field-checkbox-group-option-3",
        },
    ];

    return (
        <CheckBoxGroup
            label="Группа чекбоксов"
            options={defaultCheckBoxOptions}
            className={className}
            {...register(name)}
        />
    );
};
