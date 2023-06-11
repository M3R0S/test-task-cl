import { editFormSlice } from "features/EditForm";
import {rtkApi} from "shared/api/rtkApi"

export const rootReducer = {
    [editFormSlice.name]: editFormSlice.reducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
};
