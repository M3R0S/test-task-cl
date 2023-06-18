import { CheckBoxGroupOption } from "shared/ui/CheckBoxGroup";
import { RadioGroupOption } from "shared/ui/RadioGroup";

export const defaultCheckBoxOptions: CheckBoxGroupOption<number>[] = [
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

export const defaultRadioOptions: RadioGroupOption<number>[] = [
    {
        value: 1,
        label: "1",
        id: "field-radio-group-option-1",
    },
    {
        value: 2,
        label: "2",
        id: "field-radio-group-option-2",
    },
    {
        value: 3,
        label: "3",
        id: "field-radio-group-option-3",
    },
];