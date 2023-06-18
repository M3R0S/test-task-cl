import { EditFormCreateStep } from "../EditFormCreate/EditFormCreate.types";

export interface EditFormCreateTwoProps {
    className?: string;
    setPageNumber: (pageNumber: EditFormCreateStep) => void;
    step: EditFormCreateStep
}

export interface EditFormCreateAdvantage {
    id: string;
    value: string;
}
