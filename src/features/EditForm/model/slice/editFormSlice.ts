import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { EditFormMainSchema } from "../../ui/EditFormMain/EditFormMain";
import { EditFormCreateOneSchema } from "../../ui/EditFormCreateOne/EditFormCreateOne";
import { EditFormState } from "../types/editFormState";

import { normalizePhone } from "shared/lib/helpers/normalizePhone";

const initialState: EditFormState = {
    phone: "+79787790823",
    email: "bogdan_yalta@mail.ru",
    name: "",
    nickname: "",
    surname: "",
    sex: undefined,
};

export const editFormSlice = createSlice({
    name: "editForm",
    initialState,
    reducers: {
        setFormMain: (state, action: PayloadAction<EditFormMainSchema>) => {
            state.email = action.payload.email;
            state.phone = normalizePhone(action.payload.phone);
        },
        setFormCreateOne: (state, action: PayloadAction<EditFormCreateOneSchema>) => {
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.nickname = action.payload.nickname;
            state.sex = action.payload.sex;
        },
    },
});

export const editFormActions = editFormSlice.actions;
