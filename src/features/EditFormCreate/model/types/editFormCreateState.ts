import { SexKey } from "entities/Sex";

export interface EditFormCreateState {
    nickname: string;
    name: string;
    surname: string;
    sex?: SexKey;
    advantages: string[] | []
    checkBox: number[] | []
    radio: number | 0
}

