import { Navigate } from "react-router-dom";

import { RoutesConfig } from "./routesConfig.types";

import { MainPage } from "pages/Main";
import { NotFoundPage } from "pages/NotFound";
import { CreatePage } from "pages/Create";
import { UnavailablePage } from "pages/Unavailable";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const routesConfig: RoutesConfig = {
    UNAVAILABLE: {
        routeId: 1,
        path: PathRoutes.UNAVAILABLE,
        element: <UnavailablePage />,
    },
    DEFAULT: {
        routeId: 2,
        path: PathRoutes.DEFAULT,
        element: <Navigate to={PathRoutes.MAIN} />,
    },
    MAIN: {
        routeId: 3,
        path: PathRoutes.MAIN,
        element: <MainPage />,
    },
    CREATE: {
        routeId: 4,
        path: PathRoutes.CREATE,
        element: <CreatePage />,
    },
    // last
    NOT_FOUND: {
        routeId: 0,
        path: PathRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
};

