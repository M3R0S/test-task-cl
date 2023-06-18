import { useEffect, useState } from "react";

/**
 * Хук, для отслеживания hover состояния массивов комопнентов
 *
 * @param arrayLength - Длинна массива из компонентов
 */
export function useHoverArray(arrayLength: number) {
    const defaultArray = Array(arrayLength).fill(false);

    const [isHover, setIsHoverArray] = useState<boolean[]>(defaultArray);

    useEffect(() => {
        setIsHoverArray(Array(arrayLength).fill(false));
    }, [arrayLength]);

    const handleMouseEnter = (index: number) => () => {
        setIsHoverArray((isHover) => isHover.map((item, i) => (i === index ? true : item)));
    };

    const handleMouseLeave = (index: number) => () => {
        setIsHoverArray((isHover) => isHover.map((item, i) => (i === index ? false : item)));
    };

    return {
        handleMouseEnter,
        handleMouseLeave,
        isHover,
    };
}

