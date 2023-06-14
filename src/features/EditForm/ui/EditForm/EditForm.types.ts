export type EditFormForm = "main" | "create1" | "create2" | "create3";

export type EditFormCreatePageNumber = "1" | "2" | "3"

export interface EditFormProps {
    form: EditFormForm;
    setPageNumber?: (pageNumber: EditFormCreatePageNumber) => void;
    className?: string;
}

