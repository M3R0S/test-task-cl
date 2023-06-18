import { EditFormCreateStep } from "../EditFormCreate/EditFormCreate.types";

export interface EditFormCreateThreeProps {
    className?: string;
    setPageNumber: (pageNumber: EditFormCreateStep) => void;
    step: EditFormCreateStep
}
