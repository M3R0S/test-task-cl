import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "app/providers/Redux";

export const getForm = (state: RootState) => state.editForm;

export const getFormPhone = createSelector(getForm, (form) => form.phone);
export const getFormEmail = createSelector(getForm, (form) => form.email);
export const getFormNickname = createSelector(getForm, (form) => form.nickname);
export const getFormName = createSelector(getForm, (form) => form.name);
export const getFormSurname = createSelector(getForm, (form) => form.surname);
export const getFormSex = createSelector(getForm, (form) => form.sex);

