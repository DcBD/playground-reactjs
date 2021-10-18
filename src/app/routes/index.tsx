import DashboardFooIndex from "modules/Dashboard/Foo";
import DashboardIndexPage from "modules/Dashboard/Index";
import LoginPage from "modules/Login";
import { Route as RouterRoute, Switch } from "react-router";


/**
 * Route configuration.
 */
interface Route {
    path: string
    key: string
    exact?: boolean
    component: (props: any) => JSX.Element;
    routes?: Route[] | undefined
}



interface RenderRoutesProps {
    routes: Route[]
}



/**
 * Route
 */
export const RouteWithSubRoutes = (route: Route) => {
    return (
        <RouterRoute
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    )
}


/**
 * Application routes.
 */
export const RenderRoutes = ({ routes }: RenderRoutesProps) => {

    return (
        <Switch>
            {
                routes.map((route) => (
                    <RouteWithSubRoutes {...route} key={route.key} />
                ))
            }
            <RouterRoute component={() => <h1>Not Found!</h1>} />
        </Switch>
    )
}

/**
 * List of routes in app.
 */
const ROUTES: Route[] = [
    { path: "/", key: "ROOT", exact: true, component: LoginPage },
    {
        path: "/dashboard",
        key: "DASHBOARD_ROOT",
        component: RenderRoutes,
        routes: [
            {
                path: "/dashboard",
                key: "DASHBOARD_INDEX",
                exact: true,
                component: DashboardIndexPage
            },
            {
                path: "/dashboard/foo",
                key: "DASHBOARD_FOO_INDEX",
                exact: true,
                component: DashboardFooIndex
            }
        ]
    }
]


export default ROUTES;