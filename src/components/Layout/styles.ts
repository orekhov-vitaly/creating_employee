import styled from "@emotion/styled";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 80px ;
  border: 2px solid #000;
`;

export const Logo = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 56px;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  background: #112233;
  padding: 100px 80px;
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 200px;
`;
