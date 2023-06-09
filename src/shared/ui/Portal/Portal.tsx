import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import cl from "./Portal.module.scss";
import { CreateElement, PortalProps } from "./Portal.types";

export const Portal: FC<PortalProps> = (props) => {
    const { children, className, parentElement = document.body } = props;

    // Callback для создания ноды портала
    const createElement: CreateElement = () => document.createElement("div");
    // Сохранение элемента и изоляция его от рендеров
    const [container] = useState<HTMLElement>(createElement);

    useEffect(() => {
        parentElement.appendChild(container);
        container.classList.add(cl.portal);

        if (className) {
            container.classList.add(className);
        }

        return () => {
            parentElement.removeChild(container);
        };
    }, [className, container, parentElement]);

    return createPortal(children, container);
};
