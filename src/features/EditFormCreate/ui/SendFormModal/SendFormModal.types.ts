import { ResponseData } from "../../model/types/editFormCreateState";

export interface SendFormModalProps {
    className?: string;
    isError?: boolean;
    isLoading?: boolean;
    isOpened?: boolean;
    onClose?: VoidFunction;
    data?: ResponseData;
}
