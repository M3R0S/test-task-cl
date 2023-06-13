
/**
 * Функция для нормализации номера телефона.
 * 
 * @param phone - Номер телефона в формате +7 (900) 000-00-00.
 * @returns Номер телефона без (), - и пробелов.
 */
export function normalizePhone(phone: string) {
    return phone.replace(/[-()\s]/g, "");
}

