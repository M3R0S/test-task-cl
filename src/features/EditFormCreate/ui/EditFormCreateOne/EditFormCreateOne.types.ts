import { EditFormCreateStep } from "../EditFormCreate/EditFormCreate.types";

export interface EditFormCreateOneProps {
    className?: string;
    setPageNumber: (pageNumber: EditFormCreateStep) => void;
    step: EditFormCreateStep
}
