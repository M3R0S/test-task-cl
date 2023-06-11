import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import cl from "./UnavailablePage.module.scss";

import { Page } from "widgets/Page";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { Button } from "shared/ui/Button";
import { AppLink } from "shared/ui/AppLink";

const UnavailablePage: FC = () => {
    const navigate = useNavigate();

    const onClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Page className={cl.unavailable_page}>
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
                    Доступ к странице заблокирован
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

export default memo(UnavailablePage);
