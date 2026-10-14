export interface EmployeeData {
  name: string;
  surname: string;
  age: string;
  jobPosition?: string;
}

export interface EmployeeType extends EmployeeData {
  id: string;
}

export interface EmployeeContextData {
  employees: EmployeeType[];
  createEmployee: (data: EmployeeData) => void;
  deleteEmployee: (id: string) => void;
  deleteAllEmployees: () => void;
}
