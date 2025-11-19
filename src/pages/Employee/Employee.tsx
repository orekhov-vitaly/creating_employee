import { useContext } from "react";
import { EmployeeContext } from "components/Layout/Layout";
import {EmployeeBlock, EmployeeWrapper,  EmployeeGroup, Label, ValueBlock } from "./styles";

function Employee() {
    const { data, onDataChange } = useContext(EmployeeContext);
    return(
        <EmployeeWrapper>
            <EmployeeBlock>
                <EmployeeGroup>
                    <Label>Name</Label>
                    <ValueBlock>{data?.name}</ValueBlock>
                </EmployeeGroup>
                <EmployeeGroup>
                    <Label>Surname</Label>
                    <ValueBlock>{data?.surname}</ValueBlock>
                </EmployeeGroup>
                <EmployeeGroup>
                    <Label>Age</Label>
                    <ValueBlock>{data?.age}</ValueBlock>
                </EmployeeGroup>
                <EmployeeGroup>
                    <Label>Job Position</Label>
                    <ValueBlock>{data?.jobPosition}</ValueBlock>
                </EmployeeGroup>
            </EmployeeBlock>
        </EmployeeWrapper>
    )
}


export default Employee;