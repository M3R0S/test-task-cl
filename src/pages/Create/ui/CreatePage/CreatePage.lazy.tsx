import { lazy } from "react";

export const CreatePageLazy = lazy(
    () => import("./CreatePage")
);
