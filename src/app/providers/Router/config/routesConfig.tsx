import { RoutesConfig } from "./routesConfig.types";

import { MainPage } from "pages/Main";
import { NotFoundPage } from "pages/NotFound";
import { CreatePage } from "pages/Create";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const routesConfig: RoutesConfig = {
    MAIN: {
        routeId: 1,
        path: PathRoutes.MAIN,
        element: <MainPage />,
    },
    CREATE_1: {
        routeId: 2,
        path: PathRoutes.CREATE_1,
        element: <CreatePage pageNumber="1" />,
    },
    CREATE_2: {
        routeId: 3,
        path: PathRoutes.CREATE_2,
        element: <CreatePage pageNumber="2" />,
    },
    CREATE_3: {
        routeId: 4,
        path: PathRoutes.CREATE_3,
        element: <CreatePage pageNumber="3" />,
    },
    DEFAULT: {
        routeId: 5,
        path: PathRoutes.DEFAULT,
        element: <MainPage />,
    },
    // last
    NOT_FOUND: {
        routeId: 0,
        path: PathRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
};

