import { FC, memo } from "react";

import cl from "./MainPage.module.scss";

import { Page } from "widgets/Page";
import { EditForm } from "features/EditForm";
import { MiniProfile } from "entities/MiniProfile";
import { VStack } from "shared/ui/Stack";

const MainPage: FC = () => {
    return (
        <Page className={cl.main_page}>
            <VStack gap="24">
                <MiniProfile
                    name="Иван"
                    surname="Иванов"
                />
                <div className={cl.row} />
                <EditForm form="main" />
            </VStack>
        </Page>
    );
};

export default memo(MainPage);
