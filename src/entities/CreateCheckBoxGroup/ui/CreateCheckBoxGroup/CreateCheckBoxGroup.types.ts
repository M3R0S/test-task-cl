import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface CreateCheckBoxGroupProps<T extends FieldValues> {
    className?: string;
    register: UseFormRegister<T>;
    name: Path<T>
}
