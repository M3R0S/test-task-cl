import { useEffect } from "react";

/**
 * Хук для обработки нажатия кнопок клавиатуры
 *
 * @param action Функция, которая вызовется при нажатии определённых кнопок
 */
export function useKeyDown(action?: VoidFunction) {
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                action?.();
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [action]);
}

