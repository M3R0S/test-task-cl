export type EditFormCreateStep = "1" | "2" | "3";

export interface EditFormCreateProps {
    step: EditFormCreateStep;
    setPageNumber: (pageNumber: EditFormCreateStep) => void;
    className?: string;
}

