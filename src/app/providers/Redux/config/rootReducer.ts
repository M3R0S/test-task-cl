import { editFormCreateSlice } from "features/EditForm";
import { editProfileContactsSlice } from "features/EditProfileContacts";
import { rtkApi } from "shared/api/rtkApi";

export const rootReducer = {
    [editFormCreateSlice.name]: editFormCreateSlice.reducer,
    [editProfileContactsSlice.name]: editProfileContactsSlice.reducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
};

