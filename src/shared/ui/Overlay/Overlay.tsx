import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Overlay.module.scss";
import { OverlayProps } from "./Overlay.types";

import { useMounted } from "shared/lib/hooks/useMounted";

export const Overlay: FC<OverlayProps> = memo((props) => {
    const { className, isActive = false, onClose } = props;

    const { handleAnimationEnd } = useMounted(isActive)

    const mods: Record<string, boolean> = {
        [cl.overlay_opened]: isActive,
        [cl.overlay_closed]: !isActive,
    };

    return (
        <div
            role="button"
            onClick={onClose}
            onAnimationEnd={handleAnimationEnd("overlay-closed")}
            className={classNames(cl.overlay, className, mods)}
        />
    );
});

