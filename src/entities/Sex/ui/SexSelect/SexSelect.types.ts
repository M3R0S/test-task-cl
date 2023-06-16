import { Sex } from "../../model/types/sexState";

export interface SexSelectValue {
    value: keyof typeof Sex;
    label: Sex;
}

export interface SexSelectProps {
    className?: string;
    defaultValue?: SexSelectValue;
    value?: SexSelectValue;
    isDirty?: boolean;
    onChange?: VoidFunction;
    onBlur?: VoidFunction;
    name?: string;
    validateMessage?: string;
}
