import * as yup from "yup";

import { ValidationMessage } from "shared/config/validation/validationMessage";

export const EditFormCreateThreeSchema = yup
    .object({
        about: yup
            .string()
            .required(ValidationMessage.required)
            .max(200, ValidationMessage.aboutMaxLength),
    })
    .required();
export type EditFormCreateThreeSchema = yup.InferType<typeof EditFormCreateThreeSchema>;
