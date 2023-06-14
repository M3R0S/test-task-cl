export const PathRoutes = {
    DEFAULT: "/",
    MAIN: "/main",
    UNAVAILABLE: "/unavailable",
    CREATE: "/create",
    // last
    NOT_FOUND: "*",
} as const;

export type PathRoutes = ValueOf<typeof PathRoutes>;
