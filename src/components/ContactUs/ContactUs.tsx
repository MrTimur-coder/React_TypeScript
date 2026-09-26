import Input from "components/Input/Input";
import { ContactUsInputKeys } from "./types";
import { ContactUsForm, InputsContainer, Title } from "./styles";
import Button from "components/Button/Button";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  [ContactUsInputKeys.FullName]: Yup.string()
    .required("This field is required!")
    .min(3, "Minimum number of symbols is 3!")
    .max(50, "Maximum number of symbols is 50!"),
  [ContactUsInputKeys.Phone]: Yup.string()
    .required("This field is required!")
    .min(4, "This field should include minimum 4 symbols!")
    .max(20, "This field should include maximum 20 symbols!"),
  [ContactUsInputKeys.Email]: Yup.string()
    .email("This field should be in email form!")
    .min(6, "Email should include min 6 symbols!")
    .max(60, "Email should include max 60 symbols!"),
});

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      [ContactUsInputKeys.FullName]: "",
      [ContactUsInputKeys.Phone]: "",
      [ContactUsInputKeys.Email]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (value, helpers) => {
      console.log(value);
      helpers.resetForm();
    },
  });


  return (
    <ContactUsForm onSubmit={formik.handleSubmit}>
      <Title>Contact Us</Title>
      <InputsContainer>
        <Input
          id="fullname"
          label="Full name"
          asterisk="*"
          name={ContactUsInputKeys.FullName}
          placeholder="Your full name"
          onChange={formik.handleChange}
          value={formik.values[ContactUsInputKeys.FullName]}
          error={formik.errors[ContactUsInputKeys.FullName]}
          />
        <Input
          id="phone"
          label={`Phone`}
          asterisk="*"
          name={ContactUsInputKeys.Phone}
          placeholder="Your phone number"
          onChange={formik.handleChange}
          value={formik.values[ContactUsInputKeys.Phone]}
          error={formik.errors[ContactUsInputKeys.Phone]}
          />
        <Input
          id="email"
          label="Email"
          name={ContactUsInputKeys.Email}
          placeholder="Your email"
          onChange={formik.handleChange}
          value={formik.values[ContactUsInputKeys.Email]}
          error={formik.errors[ContactUsInputKeys.Email]}
        />
      </InputsContainer>
      <Button button_info="SEND REQUEST" type="submit"/>
    </ContactUsForm>
  );
}

export default ContactUs;