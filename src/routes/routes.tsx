import type { RoutePage } from "./types";
import Home from "pages/Home/Home";
import PageNotFound from "pages/PageNotFound/PageNotFound";

export const routesData: RoutePage[] = [
    { path: "/", element: <Home /> },
    { path: "*", element: <PageNotFound /> },
];
