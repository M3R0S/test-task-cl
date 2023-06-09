import { RouteProps } from "react-router-dom";

import { PathRoutes } from "shared/config/router/pathRoutes";

export type AppRouteProps = RouteProps & {
    readonly routeId: number;
};

export type RoutesConfig = Record<keyof typeof PathRoutes, AppRouteProps>;

