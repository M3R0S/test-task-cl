export const PathRoutes = {
    DEFAULT: "/",
    MAIN: "/main",
    CREATE_1: "/create/1",
    CREATE_2: "/create/2",
    CREATE_3: "/create/3",
    // last
    NOT_FOUND: "*",
} as const;

export type PathRoutes = ValueOf<typeof PathRoutes>;
