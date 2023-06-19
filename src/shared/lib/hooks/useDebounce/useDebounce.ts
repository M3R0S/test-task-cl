import { useCallback, useEffect, useRef } from "react";
/**
 * Хук для реализации дебаунса
 * 
 * @param callback Любая функция, которую нужно задебаунсить
 * @param delay Задержка в миллисекундах
 * @returns Дебаунс функция
 */
export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const isSuccessRef = useRef<boolean>(false);

    const debounceCallback = useCallback(
        (...args: any[]) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                callback(...args);
                isSuccessRef.current = true;
            }, delay);
        },
        [callback, delay]
    );

    useEffect(() => {
        () => {
            if (isSuccessRef.current && timerRef.current) {
                clearTimeout(timerRef.current);
                isSuccessRef.current = false;
            }
        };
    }, []);

    return debounceCallback;
};
