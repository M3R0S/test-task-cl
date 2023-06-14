export interface SelectOptions<T, K> {
    label: K;
    value: T;
}

export interface DropdownProps<T extends string, K extends string> {
    className?: string;
    options: SelectOptions<T, K>[];
    defaultValue?: T;
    value?: T;
    onChange?: VoidFunction;
    onBlur?: VoidFunction;
    placeholder?: string;
    name?: string;
    label?: string;
    isDirty?: boolean;
    /**
     * Валидационное сообщение
     */
    validateMessage?: string 
    /**
     * Нужна ли валидация
     */
    isValidate?: string 
}
