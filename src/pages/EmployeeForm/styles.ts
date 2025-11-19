import { css } from "@emotion/react";
import styled from "@emotion/styled";

const boxBasicStyles = css`
    display: flex;
    flex-direction: column;
`;

export const EmployeeFormWrapper= styled.div`
display: flex;
flex: 1;
justify-content: center;
align-items: flex-start;
`;

export const EmployeeFormComponent = styled.form`
    ${boxBasicStyles}
    gap: 30px;
    width: 100%;
    max-width: 590px;
    padding: 60px;
    background: #fff;
    border: 1px solid rgba(8, 23, 56, 1);
    border-radius: 4px;
`;

export const LabelComponent=styled.label`
font-family: "Lato", sans-serif;
font-size: 16px;
`
