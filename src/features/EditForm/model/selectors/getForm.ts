import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "app/providers/Redux";

export const getForm = (state: RootState) => state.editForm;

export const getFormPhone = createSelector(getForm, (form) => form.phone) || "";
export const getFormEmail = createSelector(getForm, (form) => form.email) || "";

