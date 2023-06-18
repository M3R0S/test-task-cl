import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { EditProfileContactsSchema } from "../../ui/EditProfileContacts/EditProfileContacts.schema";
import { EditProfileContactsState } from "../types/editProfileContacts";

import { normalizePhone } from "shared/lib/helpers/normalizePhone";

const initialState: EditProfileContactsState = {
    phone: "+79787790823",
    email: "bogdan_yalta@mail.ru",
};

export const editProfileContactsSlice = createSlice({
    name: "editProfileContacts",
    initialState,
    reducers: {
        setProfileContacts: (state, action: PayloadAction<EditProfileContactsSchema>) => {
            state.email = action.payload.email;
            state.phone = normalizePhone(action.payload.phone);
        },
    },
});

export const editProfileContactsActions = editProfileContactsSlice.actions;
