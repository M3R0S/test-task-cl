import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "./api";

// Создание инстанса для дальнейшего инжектирования эндпоинтов
export const rtkApi = createApi({
    reducerPath: "rtkApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: () => ({}),
});

