import { FC, memo } from "react";

import { EditFormCreateProps } from "./EditFormCreate.types";
import { EditFormCreateOne } from "../EditFormCreateOne/EditFormCreateOne";
import { EditFormCreateTwo } from "../EditFormCreateTwo/EditFormCreateTwo";

export const EditFormCreate: FC<EditFormCreateProps> = memo((props) => {
    const { page, className, setPageNumber } = props;

    if (page === "1") {
        return (
            <EditFormCreateOne
                setPageNumber={setPageNumber}
                className={className}
            />
        );
    }

    if (page === "2") {
        return (
            <EditFormCreateTwo
                setPageNumber={setPageNumber}
                className={className}
            />
        );
    }

    return null;
});

