import { EditFormCreateStep } from "../EditFormCreate/EditFormCreate.types";

export interface ButtonsControlStepProps {
    className?: string;
    onBack: VoidFunction;
    step: EditFormCreateStep;
}
