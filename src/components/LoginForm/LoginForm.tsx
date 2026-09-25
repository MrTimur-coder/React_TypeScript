// ШАГ 1: Импортируем useFormik из библиотеки formik
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useState, type ChangeEvent } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles";
import { LOGIN_FORM_VALUES } from "./types";
// Валидация с помощью yup
const validationSchema = Yup.object().shape({
  [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
    .required("Email field is required")
    .email("This field should be in email format"),
  [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
    .required("Password field is required")
    .min(5, "Password field should contain min 5 characters")
    .max(15, "Password field should contain max 15 characters"),
});
function LoginForm() {
  // // Шаг 2: создаем state для храния информации, которую пользователь вводит в элемент input
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // // Шаг 3: СОздаем функцию, которая будет ловить данные с клавиатуры которые ввел пользоваетль и класть их в state
  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };
  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };
  // const login = (event: any) => {
  //   event.preventDefault();
  //   console.log("Email: ", email);
  //   console.log("Password: ", password);
  // };
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log("Submit works");
      console.log(values);
      
      helpers.resetForm();
    },
  });
  // console.log(formik);
  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>
      <Button button_info="Login" type="submit" />
    </LoginFormContainer>
  );
}
export default LoginForm;