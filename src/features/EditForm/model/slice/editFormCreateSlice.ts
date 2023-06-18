import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { EditFormCreateTwoSchema } from "../../ui/EditFormCreateTwo/EditFormCreateTwo";
import { EditFormCreateOneSchema } from "../../ui/EditFormCreateOne/EditFormCreateOne.schema";
import { EditFormCreateState } from "../types/editFormCreateState";

const initialState: EditFormCreateState = {
    name: "",
    nickname: "",
    surname: "",
    sex: undefined,
    advantages: ["", "", ""],
    checkBox: [],
    radio: 0,
};

export const editFormCreateSlice = createSlice({
    name: "editFormCreate",
    initialState,
    reducers: {
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

export const editFormActions = editFormCreateSlice.actions;
