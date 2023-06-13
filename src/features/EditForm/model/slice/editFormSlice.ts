import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { EditFormMainSchema } from "../../ui/EditFormMain/EditFormMain";
import { EditFormState } from "../types/editFormState";

import { normalizePhone } from "shared/lib/helpers/normalizePhone";

const initialState: EditFormState = {
    phone: "+79787790823",
    email: "bogdan_yalta@mail.ru",
};

export const editFormSlice = createSlice({
    name: "editForm",
    initialState,
    reducers: {
        setFormMain: (state, action: PayloadAction<EditFormMainSchema>) => {
            state.email = action.payload.email;
            state.phone = normalizePhone(action.payload.phone);
        },
    },
});

export const editFormActions = editFormSlice.actions;
