import { useState, type ChangeEvent } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, Title, InputsContainer } from "./styles.ts";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passError, setPassError] = useState<string>("");

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailError("");
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassError("");
    setPassword(event.target.value);
  };

  const login = (event: any) => {
    event.preventDefault();
    if (email === "") {
      setEmailError(
        "Email can't be empty! Enter your email and make shure it matches the requirements!",
      );
    } else if (password === "") {
      setPassError(
        "Password can't be empty! Enter your password and make shure it matches the requirements!",
      );
    } else {
      console.log("Email: ", email);
      console.log("Password: ", password);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          onChange={onEmailChange}
          value={email}
          error={emailError}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          onChange={onPasswordChange}
          value={password}
          error={passError}
        />
      </InputsContainer>
      <Button button_info="Login" type="submit" />
    </LoginFormContainer>
  );
}
export default LoginForm;
