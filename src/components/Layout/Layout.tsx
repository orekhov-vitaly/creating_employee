import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    LayoutComponent,
    Header,
    Main,
    Logo,
    NavContainer,
    HeaderLogoWrapper,
} from "./styles";
import type {
    LayoutProps,
    NavLink,
    EmployeeContextType,
    EmployeeData,
} from "./types";
import { navLinksData } from "./data";
import NavigationLink from "components/NavigationLink/NavigationLink";
import { v4 } from "uuid";

export const EmployeeContext = createContext<EmployeeContextType>({
    data: undefined,
    onDataChange: () => {},
});

function Layout({ children }: LayoutProps) {
    const [employeeData, setEmployeeData] = useState<EmployeeData | undefined>(
        undefined
    );

    const navigate = useNavigate();

    const navLinks = navLinksData.map(({ path, name }: NavLink) => {
        return <NavigationLink key={v4()} path={path} name={name} />;
    });

    const goToHomePage = () => {
        navigate("/");
    };

    return (
        <LayoutComponent>
            <Header>
                <HeaderLogoWrapper>
                    <Logo onClick={goToHomePage}> App Logo</Logo>
                </HeaderLogoWrapper>
                <NavContainer>{navLinks}</NavContainer>
            </Header>
            <EmployeeContext.Provider
                value={{
                    data: employeeData,
                    onDataChange: setEmployeeData,
                }}
            >
                <Main>{children}</Main>
            </EmployeeContext.Provider>
        </LayoutComponent>
    );
}

export default Layout;
