import { FC, memo } from "react";

import cl from "./MainPage.module.scss";

import { Page } from "widgets/Page";
import { MiniProfile } from "entities/MiniProfile";

const MainPage: FC = () => {
    return (
        <Page className={cl.main_page}>
            <MiniProfile
                name="Иван"
                surname="Иванов"
            />
        </Page>
    );
};

export default memo(MainPage);
