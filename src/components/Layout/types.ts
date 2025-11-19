import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface NavLink {
    path: string;
    name: string;
}

export interface EmployeeData {
    name: string;
    surname: string;
    age: string;
    jobPosition: string;
}

export interface EmployeeContextType {
    data: EmployeeData | undefined;
    onDataChange: Dispatch<SetStateAction<EmployeeData | undefined>> | (()=>{})
}
