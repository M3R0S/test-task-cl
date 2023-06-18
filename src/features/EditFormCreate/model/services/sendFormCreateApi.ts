import { EditFormCreateState, ResponseData } from "../types/editFormCreateState";

import { rtkApi } from "shared/api/rtkApi";

export const sendFormCreateApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        sendFormCreate: builder.mutation<ResponseData, EditFormCreateState>({
            query: (body) => ({
                url: "",
                method: "POST",
                body: body,
            }),
        }),
    }),
});

export const { useSendFormCreateMutation } = sendFormCreateApi;

