import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./SendFormModal.module.scss";
import { SendFormModalProps } from "./SendFormModal.types";

import { ReactComponent as CancelSvg } from "shared/assets/svg/Circle_Cancel_Filled.svg";
import { ReactComponent as CheckSvg } from "shared/assets/svg/Circle_Check_Filled.svg";
import { ReactComponent as CloseSvg } from "shared/assets/svg/Close.svg";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { Modal } from "shared/ui/Modal";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { Svg } from "shared/ui/Svg";
import { Loader } from "shared/ui/Loader";
import { AppLink } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";

export const SendFormModal: FC<SendFormModalProps> = memo((props) => {
    const { className, isError, isLoading, data, isOpened, onClose } = props;

    let component;

    if (isLoading) {
        component = <Loader />;
    }

    if (isError || data?.status === "rejected") {
        component = (
            <VStack
                max
                rowGap="48"
                alignItems="center"
            >
                <HStack
                    max
                    justifyContent="space_between"
                >
                    <Text
                        Tag="h1"
                        size="20_600"
                        theme="primary"
                        align="center"
                    >
                        {data?.message || "Ошибка"}
                    </Text>
                    <Button
                        className={cl.close}
                        theme="clear"
                        onClick={onClose}
                    >
                        <Svg Svg={CloseSvg} />
                    </Button>
                </HStack>
                <HStack
                    justifyContent="center"
                    max
                    className={cl.svg_wrapper}
                >
                    <HStack
                        justifyContent="center"
                        className={classNames(cl.svg_outline, cl.cancel)}
                    >
                        <Svg Svg={CancelSvg} />
                    </HStack>
                </HStack>
                <Button
                    className={cl.closed}
                    onClick={onClose}
                    theme="filling"
                >
                    Закрыть
                </Button>
            </VStack>
        );
    }

    if ((!isError || data?.status === "success") && !isLoading) {
        component = (
            <VStack
                alignItems="center"
                rowGap="48"
            >
                <Text
                    Tag="h1"
                    size="20_600"
                    theme="primary"
                    align="center"
                >
                    {data?.message || "Запрос успешно отправлен"}
                </Text>
                <HStack
                    justifyContent="center"
                    max
                    className={cl.svg_wrapper}
                >
                    <HStack
                        justifyContent="center"
                        className={classNames(cl.svg_outline, cl.success)}
                    >
                        <Svg Svg={CheckSvg} />
                    </HStack>
                </HStack>
                <AppLink
                    to={PathRoutes.MAIN}
                    theme="filling"
                    onClick={onClose}
                >
                    На главную
                </AppLink>
            </VStack>
        );
    }

    return (
        <Modal
            isOpened={isOpened}
            onClose={onClose}
            className={classNames(cl.send_form_modal, className)}
        >
            {component}
        </Modal>
    );
});
