import { EditFormCreatePageNumber } from "../EditForm/EditForm.types";

export interface EditFormCreateTwoProps {
    className?: string;
    setPageNumber?: (pageNumber: EditFormCreatePageNumber) => void;
}

export interface EditFormCreateAdvantage {
    id: string;
    value: string;
}
