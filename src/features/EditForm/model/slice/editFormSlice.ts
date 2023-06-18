import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { EditFormMainSchema } from "../../ui/EditFormMain/EditFormMain";
import { EditFormCreateOneSchema } from "../../ui/EditFormCreateOne/EditFormCreateOne";
import { EditFormCreateTwoSchema } from "../../ui/EditFormCreateTwo/EditFormCreateTwo";
import { EditFormState } from "../types/editFormState";

import { normalizePhone } from "shared/lib/helpers/normalizePhone";

const initialState: EditFormState = {
    phone: "+79787790823",
    email: "bogdan_yalta@mail.ru",
    name: "",
    nickname: "",
    surname: "",
    sex: undefined,
    advantages: ["", "", ""],
    checkBox: [],
    radio: 0,
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
            state.sex = action.payload.sex.value;
        },
        setFormCreateTwo: (state, action: PayloadAction<EditFormCreateTwoSchema>) => {
            state.advantages = action.payload.advantages.map(({ advantage }) => advantage ?? "");
            if (action.payload.checkBoxGroup) {
                state.checkBox = action.payload.checkBoxGroup.map((checkBox) => Number(checkBox));
            } else {
                state.checkBox = [];
            }
            state.radio = Number(action.payload.radioGroup);
        },
    },
});

export const editFormActions = editFormSlice.actions;
