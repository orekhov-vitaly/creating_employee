import {EmployeeBlock, EmployeeWrapper,  EmployeeGroup, Label, ValueBlock } from "./styles";

function Employee() {
    return(
        <EmployeeWrapper>
            <EmployeeBlock>
                <EmployeeGroup>
                    <Label>Name</Label>
                    <ValueBlock>Will</ValueBlock>
                </EmployeeGroup>
                <EmployeeGroup>
                    <Label>Surname</Label>
                    <ValueBlock>Smead</ValueBlock>
                </EmployeeGroup>
                <EmployeeGroup>
                    <Label>Age</Label>
                    <ValueBlock>45</ValueBlock>
                </EmployeeGroup>
                <EmployeeGroup>
                    <Label>Job Position</Label>
                    <ValueBlock>Actor</ValueBlock>
                </EmployeeGroup>
            </EmployeeBlock>
        </EmployeeWrapper>
    )
}


export default Employee;