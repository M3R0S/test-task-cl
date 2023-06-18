import * as yup from "yup";

import { Sex } from "entities/Sex";
import { ValidationMessage } from "shared/config/validation/validationMessage";

export const EditFormCreateOneSchema = yup
    .object({
        nickname: yup
            .string()
            .required(ValidationMessage.required)
            .matches(/^[a-zA-Z0-9]+$/, ValidationMessage.nickname)
            .max(30, ValidationMessage.nicknameMaxLength),
        name: yup
            .string()
            .required(ValidationMessage.required)
            .max(50, ValidationMessage.nameMaxLength)
            .matches(/^[a-zA-Zа-яА-Я]+$/, ValidationMessage.name),
        surname: yup
            .string()
            .required(ValidationMessage.required)
            .max(50, ValidationMessage.surnameMaxLength)
            .matches(/^[a-zA-Zа-яА-Я]+$/, ValidationMessage.surname),
        sex: yup.object({
            value: yup.mixed<keyof typeof Sex>().required(ValidationMessage.required),
            label: yup.mixed<Sex>().required(ValidationMessage.required),
        }),
    })
    .required();
export type EditFormCreateOneSchema = yup.InferType<typeof EditFormCreateOneSchema>;

