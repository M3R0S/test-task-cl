import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import cl from "./NotFoundPage.module.scss";

import { Page } from "widgets/Page";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { AppLink } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";

const NotFoundPage: FC = () => {
    const navigate = useNavigate();

    const onClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Page className={cl.not_found_page}>
            <VStack
                alignItems="center"
                justifyContent="center"
            >
                <Text
                    Tag="h1"
                    className={cl.text}
                    size="20_600"
                    theme="red"
                >
                    Страница не существует
                </Text>
                <HStack
                    className={cl.wrapper}
                    wrap="wrap"
                    justifyContent="center"
                    rowGap="10"
                    columnGap="50"
                >
                    <Button
                        onClick={onClick}
                        theme="without_filling"
                    >
                        Назад
                    </Button>
                    <AppLink
                        className={cl.link}
                        theme="filling"
                        to={PathRoutes.MAIN}
                    >
                        На главную
                    </AppLink>
                </HStack>
            </VStack>
        </Page>
    );
};

export default memo(NotFoundPage);
