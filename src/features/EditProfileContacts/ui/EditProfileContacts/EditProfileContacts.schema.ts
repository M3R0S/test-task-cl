import * as yup from "yup";

import { ValidationMessage } from "shared/config/validation/validationMessage";

const phoneRegExp =
    /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;

const emailRegExp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const EditProfileContactsSchema = yup
    .object({
        phone: yup
            .string()
            .required(ValidationMessage.required)
            .matches(phoneRegExp, ValidationMessage.phone),
        email: yup
            .string()
            .required(ValidationMessage.required)
            .matches(emailRegExp, ValidationMessage.email),
    })
    .required();
export type EditProfileContactsSchema = yup.InferType<typeof EditProfileContactsSchema>;

