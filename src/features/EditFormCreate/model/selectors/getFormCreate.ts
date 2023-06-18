import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "app/providers/Redux";
import { Sex } from "entities/Sex";

export const getFormCreate = (state: RootState) => state.editFormCreate;

export const getFormNickname = createSelector(getFormCreate, (form) => form.nickname);
export const getFormName = createSelector(getFormCreate, (form) => form.name);
export const getFormSurname = createSelector(getFormCreate, (form) => form.surname);
export const getFormSex = createSelector(getFormCreate, (form) =>
    form.sex
        ? {
              label: Sex[form.sex],
              value: form.sex,
          }
        : undefined
);
export const getFormAdvantages = createSelector(getFormCreate, (form) =>
    form.advantages.map((advantage) => ({ advantage: advantage }))
);
export const getFormCheckBox = createSelector(getFormCreate, (form) =>
    form.checkBox.map((checkBox) => String(checkBox))
);
export const getFormRadio = createSelector(getFormCreate, (form) => String(form.radio));
export const getFormAbout = createSelector(getFormCreate, (form) => form.about);


