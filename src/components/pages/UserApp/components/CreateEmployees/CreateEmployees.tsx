// ШАГ 1: Импортируем useFormik из библиотеки formik
import { useFormik } from "formik";

import * as Yup from "yup";

// import { useState, type ChangeEvent } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { EmployeeFormContainer, Title, InputsContainer, SuccessMessage } from "./styles";
import { EMPLOYEES_FORM_VALUES } from "./types";
import { useContext, useState } from "react";
import { EmployeeContext } from "../Employee/Employee";


// Валидация с помощью yup
const validationSchema = Yup.object().shape({
  [EMPLOYEES_FORM_VALUES.NAME]: Yup.string()
    .required("Name field is required")
    .min(2, "Name field should contain min 2 characters")
    .max(50, "Name field should contain max 50 characters"),
    
  [EMPLOYEES_FORM_VALUES.SURNAME]: Yup.string()
    .required("Surname field is required")
    .min(2, "Surname field should contain min 2 characters")
    .max(15, "Surname field should contain max 15 characters"),

  [EMPLOYEES_FORM_VALUES.AGE]: Yup.string()
    .required("Age field is required")
    .min(1, "Age field should contain min 1 characters")
    .max(3, "Age field should contain max 3 characters"),

  [EMPLOYEES_FORM_VALUES.JOB_POSITION]: Yup.string()
    .max(30, "Job position field should contain max 30 characters"),
});

function CreateEmployees() {
    const {createEmployee} = useContext(EmployeeContext);
    const [isCreated,setIsCreated] = useState(false);

  const formik = useFormik({
    initialValues: {
      [EMPLOYEES_FORM_VALUES.NAME]: "",
      [EMPLOYEES_FORM_VALUES.SURNAME]: "",
      [EMPLOYEES_FORM_VALUES.AGE]: "",
      [EMPLOYEES_FORM_VALUES.JOB_POSITION]: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,

   onSubmit: (values, helpers) => {
    createEmployee({
        name: values[EMPLOYEES_FORM_VALUES.NAME],
        surname: values[EMPLOYEES_FORM_VALUES.SURNAME],
        age: values[EMPLOYEES_FORM_VALUES.AGE],
        jobPosition: values[EMPLOYEES_FORM_VALUES.JOB_POSITION],
    });
    helpers.resetForm();

    setIsCreated(true);
    setTimeout(() => setIsCreated(false), 3000);
},
  });

  return (
    // formik.handleSubmit - мы прописываем для того, чтобы когда мы нажали на кнопку с type="submit",
    // у нас вызвалась функция, которую мы прописали в onSubmit
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Title>Employee form</Title>
      <InputsContainer>
        <Input
          id="name-id"
          name={EMPLOYEES_FORM_VALUES.NAME}
          placeholder="Enter your name: "
          label="Name:"
          onChange={formik.handleChange}
          value={formik.values[EMPLOYEES_FORM_VALUES.NAME]}
          error={formik.errors[EMPLOYEES_FORM_VALUES.NAME]}
        />
        <Input
          id="surname-id"
          name={EMPLOYEES_FORM_VALUES.SURNAME}
          placeholder="Enter your surname: "
          label="Surname: "
          onChange={formik.handleChange}
          value={formik.values[EMPLOYEES_FORM_VALUES.SURNAME]}
          error={formik.errors[EMPLOYEES_FORM_VALUES.SURNAME]}
        />
         <Input
          id="age-id"
          name={EMPLOYEES_FORM_VALUES.AGE}
          placeholder="Enter your age: "
          label="Age: "
          onChange={formik.handleChange}
          value={formik.values[EMPLOYEES_FORM_VALUES.AGE]}
          error={formik.errors[EMPLOYEES_FORM_VALUES.AGE]}
        />
         <Input
          id="job_position-id"
          name={EMPLOYEES_FORM_VALUES.JOB_POSITION}
          placeholder="Enter your job position: "
          label="Job Position: "
          onChange={formik.handleChange}
          value={formik.values[EMPLOYEES_FORM_VALUES.JOB_POSITION]}
          error={formik.errors[EMPLOYEES_FORM_VALUES.JOB_POSITION]}
        />
      </InputsContainer>
      <Button button_info="Create!" type="submit" />
      {isCreated && <SuccessMessage>Employee was added successfully!</SuccessMessage>}
    </EmployeeFormContainer>
  );
}

export default CreateEmployees;
