import { FC, memo, useState } from "react";
import classNames from "classnames";

import cl from "./CreatePage.module.scss";
import { CreatePageProps } from "./CreatePage.types";

import { Page } from "widgets/Page";
import { EditFormCreate, EditFormCreatePageNumber } from "features/EditForm";
import { Stepper } from "features/Stepper";
import { VStack } from "shared/ui/Stack";

const CreatePage: FC<CreatePageProps> = (props) => {
    const { className } = props;

    const [pageNumber, setPageNumber] = useState<EditFormCreatePageNumber>("1");

    const setPageNumberHandler = (pageNumber: EditFormCreatePageNumber) => {
        setPageNumber(pageNumber);
    };

    return (
        <Page className={classNames(cl.create_page, className)}>
            <VStack rowGap="64">
                <Stepper activeDot={pageNumber} />
                <EditFormCreate
                    page={pageNumber}
                    setPageNumber={setPageNumberHandler}
                />
            </VStack>
        </Page>
    );
};

export default memo(CreatePage);
