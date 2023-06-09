import {rtkApi} from "shared/api/rtkApi"

export const rootReducer = {
    [rtkApi.reducerPath]: rtkApi.reducer
};
