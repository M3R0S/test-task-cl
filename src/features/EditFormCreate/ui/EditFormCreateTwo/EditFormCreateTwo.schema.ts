import * as yup from "yup";

export const EditFormCreateTwoSchema = yup
    .object({
        advantages: yup
            .array(
                yup
                    .object({
                        advantage: yup.string(),
                    })
                    .required()
            )
            .required(),
        checkBoxGroup: yup.array(yup.string()),
        radioGroup: yup.string(),
    })
    .required();
export type EditFormCreateTwoSchema = yup.InferType<typeof EditFormCreateTwoSchema>;
