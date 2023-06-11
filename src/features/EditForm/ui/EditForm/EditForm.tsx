import { FC, memo } from "react";

import { EditFormProps } from "./EditForm.types";
import { EditFormMain } from "../EditFormMain/EditFormMain";

export const EditForm: FC<EditFormProps> = memo((props) => {
    const { form } = props;

    if (form === "main") {
        return <EditFormMain />;
    }

    return null
});

