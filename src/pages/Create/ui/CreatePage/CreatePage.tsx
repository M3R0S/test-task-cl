import { FC, memo } from "react";

import cl from './CreatePage.module.scss';
import { CreatePageProps } from "./CreatePage.types";

const CreatePage: FC<CreatePageProps> = (props) => {
    const { pageNumber } = props

    return (
        <div className={cl.create_page}>
            
        </div>
    );
};

export default memo(CreatePage)
