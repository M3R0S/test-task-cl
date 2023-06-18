import { FC, memo } from "react";

import { EditFormProps } from "./EditForm.types";
import { EditFormMain } from "../EditFormMain/EditFormMain";
import { EditFormCreateOne } from "../EditFormCreateOne/EditFormCreateOne";
import { EditFormCreateTwo } from "../EditFormCreateTwo/EditFormCreateTwo";

export const EditForm: FC<EditFormProps> = memo((props) => {
    const { form, className, setPageNumber } = props;

    if (form === "main") {
        return <EditFormMain className={className} />;
    }

    if (form === "create1") {
        return (
            <EditFormCreateOne
                setPageNumber={setPageNumber}
                className={className}
            />
        );
    }

    if (form === "create2") {
        return (
            <EditFormCreateTwo
                setPageNumber={setPageNumber}
                className={className}
            />
        );
    }

    return null;
});

