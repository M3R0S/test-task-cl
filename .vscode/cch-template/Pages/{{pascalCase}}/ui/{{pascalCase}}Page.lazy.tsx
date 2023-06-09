import { lazy } from "react";

export const {{pascalCase}}PageLazy = lazy(
    () => import("./{{pascalCase}}Page")
);
