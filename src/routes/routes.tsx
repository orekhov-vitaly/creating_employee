import Employee from "pages/Employee/Employee";
import type { RoutePage } from "./types";
import EmployeeForm from "pages/EmployeeForm/EmployeeForm";
import PageNotFound from "pages/PageNotFound/PageNotFound";

export const routesData: RoutePage[] = [
    { path: "/", element: <EmployeeForm /> },
    { path: "/employee", element: <Employee /> },
    { path: "*", element: <PageNotFound /> },
];
