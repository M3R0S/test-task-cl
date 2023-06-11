import { lazy } from "react";

export const UnavailablePageLazy = lazy(
    () => import("./UnavailablePage")
);
