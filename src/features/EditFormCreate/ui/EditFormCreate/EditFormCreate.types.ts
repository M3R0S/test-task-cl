export type EditFormCreatePageNumber = "1" | "2" | "3";

export interface EditFormCreateProps {
    page: EditFormCreatePageNumber;
    setPageNumber?: (pageNumber: EditFormCreatePageNumber) => void;
    className?: string;
}

