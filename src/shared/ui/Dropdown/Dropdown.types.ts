export interface SelectOptions<T, K> {
    label: K;
    value: T;
}

export interface DropdownProps<T extends string, K extends string> {
    className?: string;
    options: SelectOptions<T, K>[];
    defaultValue?: SelectOptions<T, K>;
    value?: SelectOptions<T, K>;
    onChange?: VoidFunction;
    onBlur?: VoidFunction;
    placeholder?: string;
    name?: string;
    label?: string;
    isDirty?: boolean;
    id?: string
    /**
     * Валидационное сообщение
     */
    validateMessage?: string 
    /**
     * Нужна ли валидация
     */
    isValidate?: string 
}
