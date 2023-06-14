import { Sex } from "../../model/types/sexState";

export interface SexSelectProps {
    className?: string;
    defaultValue?: keyof typeof Sex;
    value?: {
        value: keyof typeof Sex,
        label: Sex
    };
    isDirty?: boolean;
    onChange?: VoidFunction;
    onBlur?: VoidFunction;
    name?: string;
    validateMessage?: string;
}
