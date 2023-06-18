import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "app/providers/Redux";

export const getProfileContacts = (state: RootState) => state.editProfileContacts;

export const getProfileContactsPhone = createSelector(
    getProfileContacts,
    (contacts) => contacts.phone
);
export const getProfileContactsEmail = createSelector(
    getProfileContacts,
    (contacts) => contacts.email
);

