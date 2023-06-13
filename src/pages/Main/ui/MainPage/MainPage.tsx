import { FC, memo } from "react";

import cl from "./MainPage.module.scss";

import { Page } from "widgets/Page";
import { EditForm } from "features/EditForm";
import { MiniProfile } from "entities/MiniProfile";
import Avatar from "shared/assets/image/photo_avatar.jpg";
import { VStack } from "shared/ui/Stack";

const MainPage: FC = () => {
    return (
        <Page className={cl.main_page}>
            <VStack gap="24">
                <MiniProfile
                    name="Богдан"
                    surname="Москаленко"
                    avatar={Avatar}
                    telegram="https://t.me/bodyaaaga"
                    github="https://github.com/M3R0S/test-task-cl"
                    resume="https://hh.ru/resume/47b5a9acff0b39b3db0039ed1f454f4a6e4162"
                />
                <div className={cl.row} />
                <EditForm form="main" />
            </VStack>
        </Page>
    );
};

export default memo(MainPage);
