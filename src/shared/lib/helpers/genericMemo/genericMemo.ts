import { memo } from "react";

/**
 * Обёртка для сохранения типизации пропсов, если необходимо задать дженерик в компоненте, обёрнутом в memo
 * 
 * @param component - Основной компонент без обёртки memo
 * 
 * @return Компонент, обёрнутый в memo с сохранением типизации
 */
export const genericMemo: <T>(component: T) => T = memo;
