import { EditFormCreateOneSchema } from "../../ui/EditFormCreateOne/EditFormCreateOne";
import { EditFormMainSchema } from "../../ui/EditFormMain/EditFormMain";

import { Sex } from "entities/Sex";

// Костыль, чтобы обойти NonNullable тип у mixed() в yup и для нормализации валидации обязательного поля
export type EditFormCreateOneSchemaNew = Omit<EditFormCreateOneSchema, "sex"> & {
    sex?: {
        value: keyof typeof Sex;
        label: Sex;
    };
};

// Объединение типов в основную State схему
export type EditFormState = EditFormMainSchema & EditFormCreateOneSchemaNew;
