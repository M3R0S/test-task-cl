import { useEffect, useState } from "react";

import { HandleAnimationEnd, UseMountedReturns } from "./useMounted.types";

/**
 * Хук для монтирования компонентов с изменением состояния после окончания scss анимации
 *
 * @param isActive Boolean. Состояния компонента
 */
export function useMounted(isActive: boolean): UseMountedReturns {
    const [isMounted, setIsMounted] = useState<boolean>(isActive);

    const unmounted = () => {
        setIsMounted(false);
    };

    // Функция изменения стостояния на значение false, если передано верное имя scss анимации
    const handleAnimationEnd: HandleAnimationEnd = (animationName) => (e) => {
        if (animationName && e.animationName.includes(animationName)) {
            unmounted();
        }
    };

    useEffect(() => {
        if (isActive) {
            setIsMounted(true);
        }
    }, [isActive]);

    return { isMounted, unmounted, handleAnimationEnd };
}

