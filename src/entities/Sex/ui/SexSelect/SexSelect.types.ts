import { Sex } from "../../model/types/sexState";

export interface SexSelectOption {
    value: keyof typeof Sex;
    label: Sex;
}

export interface SexSelectProps {
    className?: string;
    defaultValue?: SexSelectOption;
    value?: SexSelectOption;
    isDirty?: boolean;
    onChange?: VoidFunction;
    onBlur?: VoidFunction;
    name?: string;
    validateMessage?: string;
}
