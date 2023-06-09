import { FC, memo } from "react";

import cl from './NotFoundPage.module.scss'

const NotFoundPage: FC = () => {
    return (
        <div className={cl.not_found_page}>
            Страница недоступна
        </div>
    );
};

export default memo(NotFoundPage)
