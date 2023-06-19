/// <reference types="react-scripts" />

/**
 * Тип, используюмый, как альтернатива enum.
 * 
 * @param T - Необходимо передать typeof Object as const.
 * 
 * @returns Unit type и объект со значениями.
 */
type ValueOf<T> = T[keyof T];
