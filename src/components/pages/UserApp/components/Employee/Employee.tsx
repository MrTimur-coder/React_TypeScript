import { useState, useContext, createContext, type ReactNode } from "react";

import Button from "components/Button/Button";

import {
  EmployeesContainer,
  CardContainer,
  CardInfo,
  InfoTitle,
  InfoText,
  CardsList,
} from "./styles";
import { type EmployeeData, type EmployeeType, type EmployeeContextData } from "./types";
import { v4 } from "uuid";

//!!!!!
export const EmployeeContext = createContext<EmployeeContextData>({
  employees: [],
  createEmployee: () => {},
  deleteEmployee: () => {},
  deleteAllEmployees: () => {},
});

//Data
export function EmployeeProvider({ children }: { children: ReactNode }) {
  
  const [employees, setEmployees] = useState<EmployeeType[]>([]);

  const createEmployee = (data: EmployeeData) => {
    const newEmployee: EmployeeType = {
      id: v4(),
      name: data.name,
      surname: data.surname,
      age: data.age,
      jobPosition: data.jobPosition,
    };
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (id: string) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const deleteAllEmployees = () => {
  setEmployees([]);
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, createEmployee, deleteEmployee, deleteAllEmployees,}}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

//Showing
function Employee() {
  const { employees, deleteEmployee, deleteAllEmployees } = useContext(EmployeeContext);

  return (
    <EmployeesContainer>
      <CardsList>
      {employees.map((employee) => (
        <CardContainer key={employee.id}>
          <CardInfo>
            <InfoTitle>Fullname:</InfoTitle>
            <InfoText>{`${employee.name} ${employee.surname}`}</InfoText>
          </CardInfo>
          <CardInfo>
            <InfoTitle>Age:</InfoTitle>
            <InfoText>{employee.age}</InfoText>
          </CardInfo>
          <CardInfo>
            <InfoTitle>Job Position:</InfoTitle>
            <InfoText>{employee.jobPosition}</InfoText>
          </CardInfo>
          <Button isRed button_info="Delete" onClick={() => deleteEmployee(employee.id)} />
        </CardContainer>
      ))}
      </CardsList>
      {employees.length > 0 && (
        <Button isRed
        button_info="Remove All Employees"
        onClick={deleteAllEmployees}
        />
      )}
    </EmployeesContainer>
  );
}

export default Employee;