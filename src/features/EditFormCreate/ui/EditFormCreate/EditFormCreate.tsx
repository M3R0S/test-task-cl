import { FC, memo } from "react";

import { EditFormCreateProps } from "./EditFormCreate.types";
import { EditFormCreateOne } from "../EditFormCreateOne/EditFormCreateOne";
import { EditFormCreateTwo } from "../EditFormCreateTwo/EditFormCreateTwo";
import { EditFormCreateThree } from "../EditFormCreateThree/EditFormCreateThree";

export const EditFormCreate: FC<EditFormCreateProps> = memo((props) => {
    const { step, className, setPageNumber } = props;

    if (step === "1") {
        return (
            <EditFormCreateOne
                setPageNumber={setPageNumber}
                className={className}
                step={step}
            />
        );
    }

    if (step === "2") {
        return (
            <EditFormCreateTwo
                setPageNumber={setPageNumber}
                className={className}
                step={step}
            />
        );
    }

    if (step === "3") {
        return (
            <EditFormCreateThree
                setPageNumber={setPageNumber}
                className={className}
                step={step}
            />
        );
    }

    return null;
});

