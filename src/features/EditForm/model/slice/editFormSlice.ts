import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { EditFormMainSchema } from "../../ui/EditFormMain/EditFormMain";
import { EditFormState } from "../types/editFormState";

const initialState: EditFormState = {
    phone: "+7 (",
    email: "",
};

export const editFormSlice = createSlice({
    name: "editForm",
    initialState,
    reducers: {
        setFormMain: (state, action: PayloadAction<EditFormMainSchema>) => {
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        },
    },
});

export const editFormActions = editFormSlice.actions;
