import styled from "@emotion/styled";

export const EmployeeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #092037; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const EmployeeBlock = styled.div`
  background: white;
  padding: 40px;
  width: 400px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const EmployeeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.div`
  font-size: 12px;
  color: #888;
`;

export const ValueBlock = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #1c1c1c;
`;
