import { EditFormMainSchema } from "../../ui/EditFormMain/EditFormMain";

export type EditFormState = EditFormMainSchema

export interface EditFormNavigateState<T extends string> {
    create: T
}