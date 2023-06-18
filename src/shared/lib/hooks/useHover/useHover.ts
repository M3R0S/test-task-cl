import { useState } from "react";

/**
 * Хук, для отслеживания hover состояния комопнента
 */
export function useHover() {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    return {
        onMouseEnter,
        onMouseLeave,
        isHover,
    };
}

