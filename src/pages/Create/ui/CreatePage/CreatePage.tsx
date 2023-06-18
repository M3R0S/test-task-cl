import { FC, memo, useState } from "react";
import classNames from "classnames";

import cl from "./CreatePage.module.scss";
import { CreatePageProps } from "./CreatePage.types";

import { Page } from "widgets/Page";
import { EditFormCreate, EditFormCreateStep } from "features/EditFormCreate";
import { Stepper } from "features/Stepper";
import { VStack } from "shared/ui/Stack";

const CreatePage: FC<CreatePageProps> = (props) => {
    const { className } = props;

    const [step, setStep] = useState<EditFormCreateStep>("1");

    const setStepHandler = (pageNumber: EditFormCreateStep) => {
        setStep(pageNumber);
    };

    return (
        <Page className={classNames(cl.create_page, className)}>
            <VStack rowGap="64">
                <Stepper activeDot={step} />
                <EditFormCreate
                    step={step}
                    setPageNumber={setStepHandler}
                />
            </VStack>
        </Page>
    );
};

export default memo(CreatePage);
