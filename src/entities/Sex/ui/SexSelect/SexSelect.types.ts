import { Sex } from "../../model/types/sexState";

export interface SexSelectProps {
    className?: string;
    defaultValue?: keyof typeof Sex;
    value?: keyof typeof Sex;
    onChange?: VoidFunction;
    onBlur?: VoidFunction;
    name?: string;
    validateMessage?: string;
    isDirty?: boolean;
}
