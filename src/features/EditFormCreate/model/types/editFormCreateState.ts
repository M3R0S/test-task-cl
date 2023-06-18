import { SexKey } from "entities/Sex";

export interface EditFormCreateState {
    nickname: string;
    name: string;
    surname: string;
    sex?: SexKey;
    advantages: string[] | [];
    checkBox: number[] | [];
    radio: number | 0;
    about: string;
}

export type ResponseDataMessage = "Форма успешно отправлена" | "Ошибка";
export type ResponseDataStatus = "success" | "rejected";

export interface ResponseData {
    message: ResponseDataMessage;
    status: ResponseDataStatus;
}

