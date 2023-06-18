import { FC } from "react";
import classNames from "classnames";

import cl from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";
import { Portal } from "../Portal";
import { Overlay } from "../Overlay";
import { VStack } from "../Stack";

import { useMounted } from "shared/lib/hooks/useMounted";
import { useKeyDown } from "shared/lib/hooks/useKeyDown";

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpened = false, onClose } = props;

    const { isMounted, handleAnimationEnd } = useMounted(isOpened);

    useKeyDown(onClose);

    if (!isOpened && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <Overlay
                onClose={onClose}
                isActive={isOpened}
            />
            <VStack
                alignItems="center"
                onAnimationEnd={handleAnimationEnd("content-closed")}
                className={classNames(cl.content, className, {
                    [cl.content_opened]: isOpened,
                    [cl.content_closed]: !isOpened,
                })}
            >
                {children}
            </VStack>
        </Portal>
    );
};

